"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Trash2, 
  Edit2, 
  LogOut, 
  Lock, 
  Image as ImageIcon, 
  Activity, 
  PlusCircle, 
  MinusCircle, 
  Check, 
  AlertCircle,
  Upload,
  ArrowLeft
} from "lucide-react";
import { loginAdmin, logoutAdmin } from "@/app/actions/auth";
import { createGalleryItem, deleteGalleryItem } from "@/app/actions/gallery";
import { createTreatment, updateTreatment, deleteTreatment } from "@/app/actions/treatments";
import Button from "../ui/Button";
import Card from "../ui/Card";

interface AdminDashboardClientProps {
  isAuthenticated: boolean;
  initialTreatments: any[];
  initialGallery: any[];
}

export const AdminDashboardClient: React.FC<AdminDashboardClientProps> = ({
  isAuthenticated,
  initialTreatments,
  initialGallery
}) => {
  const [activeTab, setActiveTab] = useState<"treatments" | "gallery">("treatments");
  
  // Auth state
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // Lists state
  const [treatments, setTreatments] = useState(initialTreatments);
  const [gallery, setGallery] = useState(initialGallery);
  const [statusMessage, setStatusMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Form modals state
  const [showGalleryForm, setShowGalleryForm] = useState(false);
  const [showTreatmentForm, setShowTreatmentForm] = useState(false);
  const [editingTreatmentId, setEditingTreatmentId] = useState<string | null>(null);

  // File upload state
  const [uploading, setUploading] = useState(false);

  // Gallery Form State
  const [galleryForm, setGalleryForm] = useState({
    title: "",
    description: "",
    category: "our-clinic" as "award" | "happy-patients" | "our-clinic" | "after-treatment",
    imageUrl: ""
  });

  // Treatment Form State
  const [treatmentForm, setTreatmentForm] = useState({
    id: "",
    title: "",
    shortDesc: "",
    longDesc: "",
    iconName: "Activity",
    imageUrl: "",
    fullDescription: "",
    benefits: [""] as string[],
    whoIsItFor: [""] as string[],
    process: [{ title: "", description: "" }] as { title: string; description: string }[],
    faqs: [{ question: "", answer: "" }] as { question: string; answer: string }[]
  });

  const showStatus = (type: "success" | "error", text: string) => {
    setStatusMessage({ type, text });
    setTimeout(() => setStatusMessage(null), 5000);
  };

  // Auth Handler
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      const res = await loginAdmin(password);
      if (res.success) {
        window.location.reload();
      } else {
        setLoginError(res.error || "Login failed");
      }
    } catch (err) {
      setLoginError("An unexpected error occurred");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
    window.location.reload();
  };

  // Image Upload Helper
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, formType: "gallery" | "treatment") => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Keep it small (under 1.5MB) to prevent MongoDB payload overhead
    if (file.size > 1.5 * 1024 * 1024) {
      showStatus("error", "File is too large. Please select an image under 1.5MB.");
      return;
    }

    setUploading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64String = event.target?.result as string;
      if (base64String) {
        if (formType === "gallery") {
          setGalleryForm(prev => ({ ...prev, imageUrl: base64String }));
        } else {
          setTreatmentForm(prev => ({ ...prev, imageUrl: base64String }));
        }
        showStatus("success", "Image loaded successfully");
      } else {
        showStatus("error", "Failed to parse image file");
      }
      setUploading(false);
    };
    reader.onerror = () => {
      showStatus("error", "Error reading image file");
      setUploading(false);
    };
    reader.readAsDataURL(file);
  };

  // Gallery Handlers
  const handleGallerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!galleryForm.imageUrl) {
      showStatus("error", "Please provide an image URL or upload a file");
      return;
    }
    try {
      const res = await createGalleryItem(galleryForm);
      if (res.success) {
        setGallery(prev => [res.item, ...prev]);
        setShowGalleryForm(false);
        setGalleryForm({ title: "", description: "", category: "our-clinic", imageUrl: "" });
        showStatus("success", "Gallery image added successfully");
      } else {
        showStatus("error", res.error || "Failed to add gallery image");
      }
    } catch (err) {
      showStatus("error", "Failed to communicate with server");
    }
  };

  const handleGalleryDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;
    try {
      const res = await deleteGalleryItem(id);
      if (res.success) {
        setGallery(prev => prev.filter(item => item.id !== id));
        showStatus("success", "Image deleted successfully");
      } else {
        showStatus("error", res.error || "Failed to delete image");
      }
    } catch (err) {
      showStatus("error", "Failed to delete image");
    }
  };

  // Treatment Form Helpers
  const addListField = (field: "benefits" | "whoIsItFor") => {
    setTreatmentForm(prev => ({
      ...prev,
      [field]: [...prev[field], ""]
    }));
  };

  const removeListField = (field: "benefits" | "whoIsItFor", index: number) => {
    setTreatmentForm(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const updateListField = (field: "benefits" | "whoIsItFor", index: number, value: string) => {
    setTreatmentForm(prev => {
      const newList = [...prev[field]];
      newList[index] = value;
      return { ...prev, [field]: newList };
    });
  };

  const addProcessStep = () => {
    setTreatmentForm(prev => ({
      ...prev,
      process: [...prev.process, { title: "", description: "" }]
    }));
  };

  const removeProcessStep = (index: number) => {
    setTreatmentForm(prev => ({
      ...prev,
      process: prev.process.filter((_, i) => i !== index)
    }));
  };

  const updateProcessStep = (index: number, key: "title" | "description", value: string) => {
    setTreatmentForm(prev => {
      const newProcess = [...prev.process];
      newProcess[index] = { ...newProcess[index], [key]: value };
      return { ...prev, process: newProcess };
    });
  };

  const addFaq = () => {
    setTreatmentForm(prev => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }]
    }));
  };

  const removeFaq = (index: number) => {
    setTreatmentForm(prev => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index)
    }));
  };

  const updateFaq = (index: number, key: "question" | "answer", value: string) => {
    setTreatmentForm(prev => {
      const newFaqs = [...prev.faqs];
      newFaqs[index] = { ...newFaqs[index], [key]: value };
      return { ...prev, faqs: newFaqs };
    });
  };

  // Treatment CRUD Operations
  const openNewTreatmentForm = () => {
    setEditingTreatmentId(null);
    setTreatmentForm({
      id: "",
      title: "",
      shortDesc: "",
      longDesc: "",
      iconName: "Activity",
      imageUrl: "",
      fullDescription: "",
      benefits: [""],
      whoIsItFor: [""],
      process: [{ title: "", description: "" }],
      faqs: [{ question: "", answer: "" }]
    });
    setShowTreatmentForm(true);
  };

  const openEditTreatmentForm = (svc: any) => {
    setEditingTreatmentId(svc.id);
    setTreatmentForm({
      id: svc.id,
      title: svc.title,
      shortDesc: svc.shortDesc,
      longDesc: svc.longDesc,
      iconName: svc.iconName || "Activity",
      imageUrl: svc.imageUrl || "",
      fullDescription: svc.fullDescription || "",
      benefits: svc.benefits?.length ? svc.benefits : [""],
      whoIsItFor: svc.whoIsItFor?.length ? svc.whoIsItFor : [""],
      process: svc.process?.length ? svc.process : [{ title: "", description: "" }],
      faqs: svc.faqs?.length ? svc.faqs : [{ question: "", answer: "" }]
    });
    setShowTreatmentForm(true);
  };

  const handleTreatmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!treatmentForm.id) {
      showStatus("error", "Slug ID is required (e.g. root-canal)");
      return;
    }
    
    // Filter out empty rows
    const cleanedForm = {
      ...treatmentForm,
      benefits: treatmentForm.benefits.filter(b => b.trim() !== ""),
      whoIsItFor: treatmentForm.whoIsItFor.filter(w => w.trim() !== ""),
      process: treatmentForm.process.filter(p => p.title.trim() !== "" || p.description.trim() !== ""),
      faqs: treatmentForm.faqs.filter(f => f.question.trim() !== "" || f.answer.trim() !== "")
    };

    try {
      if (editingTreatmentId) {
        const res = await updateTreatment(editingTreatmentId, cleanedForm);
        if (res.success) {
          setTreatments(prev => prev.map(t => t.id === editingTreatmentId ? res.treatment : t));
          setShowTreatmentForm(false);
          showStatus("success", "Treatment updated successfully");
        } else {
          showStatus("error", res.error || "Failed to update treatment");
        }
      } else {
        const res = await createTreatment(cleanedForm);
        if (res.success) {
          setTreatments(prev => [...prev, res.treatment]);
          setShowTreatmentForm(false);
          showStatus("success", "Treatment added successfully");
        } else {
          showStatus("error", res.error || "Failed to add treatment");
        }
      }
    } catch (err) {
      showStatus("error", "Error saving treatment data");
    }
  };

  const handleTreatmentDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this treatment? This will break its route pages.")) return;
    try {
      const res = await deleteTreatment(id);
      if (res.success) {
        setTreatments(prev => prev.filter(t => t.id !== id));
        showStatus("success", "Treatment deleted successfully");
      } else {
        showStatus("error", res.error || "Failed to delete treatment");
      }
    } catch (err) {
      showStatus("error", "Error deleting treatment");
    }
  };

  // Render Login UI
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="max-w-md w-full p-8 border border-slate-200/80 shadow-md bg-white">
          <div className="text-center flex flex-col items-center gap-3">
            <div className="p-3 bg-secondary/15 rounded-full text-secondary">
              <Lock className="h-6 w-6" />
            </div>
            <h2 className="font-display font-extrabold text-2xl text-primary">
              Admin Authentication
            </h2>
            <p className="font-sans text-slate-500 text-sm">
              Enter password credentials to access the administrative dashboard.
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleLogin}>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="text-xs font-display font-bold uppercase text-slate-400 tracking-wide">
                Secret Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="font-sans text-sm border border-slate-200 rounded-xl px-4 py-3 w-full bg-slate-50/50 focus:bg-white focus:outline-none focus:border-secondary transition-smooth"
                placeholder="Enter password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {loginError && (
              <div className="flex items-center gap-2 p-3.5 bg-red-50 text-red-600 rounded-xl text-xs font-sans">
                <AlertCircle className="h-4.5 w-4.5 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}
            <Button
              type="submit"
              variant="secondary"
              className="w-full flex justify-center py-3 font-semibold text-sm"
              disabled={loginLoading}
            >
              {loginLoading ? "Verifying..." : "Access Dashboard"}
            </Button>
          </form>
        </Card>
      </div>
    );
  }

  // Render Dashboard UI
  return (
    <div className="bg-slate-50 min-h-screen pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Notification Banner */}
        {statusMessage && (
          <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl shadow-lg border text-sm font-sans animate-in fade-in slide-in-from-bottom-5 duration-300 ${
            statusMessage.type === "success" 
              ? "bg-emerald-50 border-emerald-200 text-emerald-700" 
              : "bg-red-50 border-red-200 text-red-700"
          }`}>
            {statusMessage.type === "success" ? <Check className="h-5 w-5" /> : <AlertCircle className="h-5 w-5" />}
            <span>{statusMessage.text}</span>
          </div>
        )}

        {/* Dashboard Top bar */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6 mb-8">
          <div>
            <h1 className="font-display font-extrabold text-3xl text-primary">
              Management Dashboard
            </h1>
            <p className="font-sans text-slate-500 text-sm mt-1">
              Configure clinic clinical treatments and index photo gallery resources in real-time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="flex items-center gap-2 border-slate-300 text-slate-600 font-semibold"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </Button>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 mb-8">
          <button
            onClick={() => setActiveTab("treatments")}
            className={`px-6 py-3 border-b-2 font-display font-bold text-sm tracking-wide transition-smooth flex items-center gap-2 cursor-pointer ${
              activeTab === "treatments"
                ? "border-secondary text-secondary"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            <Activity className="h-4 w-4" />
            <span>Clinic Treatments ({treatments.length})</span>
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-6 py-3 border-b-2 font-display font-bold text-sm tracking-wide transition-smooth flex items-center gap-2 cursor-pointer ${
              activeTab === "gallery"
                ? "border-secondary text-secondary"
                : "border-transparent text-slate-400 hover:text-slate-600"
            }`}
          >
            <ImageIcon className="h-4 w-4" />
            <span>Photo Gallery ({gallery.length})</span>
          </button>
        </div>

        {/* ============================================================== */}
        {/* TREATMENTS TAB VIEW */}
        {/* ============================================================== */}
        {activeTab === "treatments" && (
          <div>
            {showTreatmentForm ? (
              <Card className="p-8 border border-slate-200/80 bg-white">
                <div className="flex items-center gap-2 mb-6 text-slate-500 hover:text-primary transition-smooth cursor-pointer" onClick={() => setShowTreatmentForm(false)}>
                  <ArrowLeft className="h-4 w-4" />
                  <span className="font-sans text-sm font-semibold">Back to Treatments List</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-primary mb-6">
                  {editingTreatmentId ? `Edit: ${treatmentForm.title}` : "Add New Clinical Treatment"}
                </h3>
                
                <form onSubmit={handleTreatmentSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Treatment Title</label>
                      <input
                        required
                        className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary"
                        placeholder="e.g. Painless Root Canal"
                        value={treatmentForm.title}
                        onChange={e => setTreatmentForm(prev => ({ ...prev, title: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Slug ID (Unique URL path)</label>
                      <input
                        required
                        disabled={!!editingTreatmentId}
                        className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary disabled:bg-slate-100 disabled:text-slate-400"
                        placeholder="e.g. root-canal"
                        value={treatmentForm.id}
                        onChange={e => setTreatmentForm(prev => ({ ...prev, id: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "") }))}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Short Card Description</label>
                      <textarea
                        required
                        className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary h-20"
                        placeholder="Brief summary shown on grids..."
                        value={treatmentForm.shortDesc}
                        onChange={e => setTreatmentForm(prev => ({ ...prev, shortDesc: e.target.value }))}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Long Description</label>
                      <textarea
                        required
                        className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary h-20"
                        placeholder="General descriptive context..."
                        value={treatmentForm.longDesc}
                        onChange={e => setTreatmentForm(prev => ({ ...prev, longDesc: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400">Full Content Description</label>
                    <textarea
                      required
                      className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary h-28"
                      placeholder="Comprehensive overview layout for subpage detail..."
                      value={treatmentForm.fullDescription}
                      onChange={e => setTreatmentForm(prev => ({ ...prev, fullDescription: e.target.value }))}
                    />
                  </div>

                  {/* Thumbnail image and uploader */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400 flex items-center gap-1.5">
                      <Upload className="h-3.5 w-3.5 text-secondary" />
                      <span>Upload Treatment Image File</span>
                    </label>
                    <div className="flex items-center gap-4">
                      {treatmentForm.imageUrl && (
                        <div className="h-16 w-24 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shrink-0">
                          <img src={treatmentForm.imageUrl} alt="Treatment preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="relative border border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-2.5 flex items-center justify-between text-xs font-sans grow">
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={e => handleImageUpload(e, "treatment")}
                          disabled={uploading}
                        />
                        <span className="text-slate-400 pl-2">
                          {uploading ? "Uploading..." : treatmentForm.imageUrl ? "Change file..." : "Click to select file"}
                        </span>
                        <Button type="button" variant="outline" size="sm" className="pointer-events-none text-[10px] py-1 px-2.5">
                          Browse
                        </Button>
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Dynamic String Lists (Benefits & whoIsItFor) */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Benefits List */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-display font-bold uppercase text-slate-400">Key Benefits</label>
                        <button type="button" onClick={() => addListField("benefits")} className="text-secondary hover:text-secondary-hover flex items-center gap-1 text-xs font-sans font-semibold cursor-pointer">
                          <PlusCircle className="h-4 w-4" /> Add Row
                        </button>
                      </div>
                      <div className="space-y-2">
                        {treatmentForm.benefits.map((benefit, bidx) => (
                          <div key={bidx} className="flex items-center gap-2">
                            <input
                              className="border border-slate-200 rounded-lg px-3 py-2 w-full font-sans text-xs focus:outline-none focus:border-secondary"
                              placeholder="e.g. Relieves pain instantly"
                              value={benefit}
                              onChange={e => updateListField("benefits", bidx, e.target.value)}
                            />
                            <button type="button" onClick={() => removeListField("benefits", bidx)} disabled={treatmentForm.benefits.length === 1} className="text-red-400 hover:text-red-600 disabled:opacity-30 cursor-pointer">
                              <MinusCircle className="h-4.5 w-4.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Who is it for symptoms */}
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-display font-bold uppercase text-slate-400">Target Symptoms (Who is it for)</label>
                        <button type="button" onClick={() => addListField("whoIsItFor")} className="text-secondary hover:text-secondary-hover flex items-center gap-1 text-xs font-sans font-semibold cursor-pointer">
                          <PlusCircle className="h-4 w-4" /> Add Row
                        </button>
                      </div>
                      <div className="space-y-2">
                        {treatmentForm.whoIsItFor.map((item, widx) => (
                          <div key={widx} className="flex items-center gap-2">
                            <input
                              className="border border-slate-200 rounded-lg px-3 py-2 w-full font-sans text-xs focus:outline-none focus:border-secondary"
                              placeholder="e.g. Sharp pain when biting"
                              value={item}
                              onChange={e => updateListField("whoIsItFor", widx, e.target.value)}
                            />
                            <button type="button" onClick={() => removeListField("whoIsItFor", widx)} disabled={treatmentForm.whoIsItFor.length === 1} className="text-red-400 hover:text-red-600 disabled:opacity-30 cursor-pointer">
                              <MinusCircle className="h-4.5 w-4.5" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* Step Timeline Procedure List */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Procedure Steps (Flowchart Timeline)</label>
                      <button type="button" onClick={addProcessStep} className="text-secondary hover:text-secondary-hover flex items-center gap-1 text-xs font-sans font-semibold cursor-pointer">
                        <PlusCircle className="h-4 w-4" /> Add Procedure Step
                      </button>
                    </div>
                    <div className="space-y-4">
                      {treatmentForm.process.map((step, sidx) => (
                        <div key={sidx} className="border border-slate-150 rounded-2xl p-4 bg-slate-50/40 relative flex flex-col gap-3">
                          <button type="button" onClick={() => removeProcessStep(sidx)} disabled={treatmentForm.process.length === 1} className="absolute top-4 right-4 text-red-400 hover:text-red-600 disabled:opacity-30 cursor-pointer">
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <div className="flex flex-col gap-1 pr-8">
                            <span className="text-[10px] font-display font-extrabold text-secondary uppercase">Step {sidx + 1}</span>
                            <input
                              required
                              className="border border-slate-200 bg-white rounded-lg px-3 py-1.5 font-sans text-xs focus:outline-none focus:border-secondary mt-1 font-semibold text-primary"
                              placeholder="Step Title (e.g. Diagnostic Scan)"
                              value={step.title}
                              onChange={e => updateProcessStep(sidx, "title", e.target.value)}
                            />
                          </div>
                          <textarea
                            required
                            className="border border-slate-200 bg-white rounded-lg px-3 py-2 font-sans text-xs focus:outline-none focus:border-secondary h-16"
                            placeholder="Step description of what occurs..."
                            value={step.description}
                            onChange={e => updateProcessStep(sidx, "description", e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <hr className="border-slate-100" />

                  {/* FAQs List */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-display font-bold uppercase text-slate-400">Frequently Asked Questions (FAQ Accordions)</label>
                      <button type="button" onClick={addFaq} className="text-secondary hover:text-secondary-hover flex items-center gap-1 text-xs font-sans font-semibold cursor-pointer">
                        <PlusCircle className="h-4 w-4" /> Add FAQ Row
                      </button>
                    </div>
                    <div className="space-y-4">
                      {treatmentForm.faqs.map((faq, fidx) => (
                        <div key={fidx} className="border border-slate-150 rounded-2xl p-4 bg-slate-50/40 relative flex flex-col gap-3">
                          <button type="button" onClick={() => removeFaq(fidx)} disabled={treatmentForm.faqs.length === 1} className="absolute top-4 right-4 text-red-400 hover:text-red-600 disabled:opacity-30 cursor-pointer">
                            <Trash2 className="h-4 w-4" />
                          </button>
                          <div className="flex flex-col gap-1 pr-8">
                            <span className="text-[10px] font-display font-extrabold text-secondary uppercase">FAQ {fidx + 1}</span>
                            <input
                              required
                              className="border border-slate-200 bg-white rounded-lg px-3 py-1.5 font-sans text-xs focus:outline-none focus:border-secondary mt-1 font-semibold text-primary"
                              placeholder="Question (e.g. Is it painful?)"
                              value={faq.question}
                              onChange={e => updateFaq(fidx, "question", e.target.value)}
                            />
                          </div>
                          <textarea
                            required
                            className="border border-slate-200 bg-white rounded-lg px-3 py-2 font-sans text-xs focus:outline-none focus:border-secondary h-16"
                            placeholder="Answer description..."
                            value={faq.answer}
                            onChange={e => updateFaq(fidx, "answer", e.target.value)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Form Submission buttons */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button type="button" variant="outline" onClick={() => setShowTreatmentForm(false)} className="font-semibold text-sm">
                      Cancel
                    </Button>
                    <Button type="submit" variant="secondary" className="font-semibold text-sm">
                      Save Treatment
                    </Button>
                  </div>
                </form>
              </Card>
            ) : (
              <div>
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-lg text-primary">
                    All Clinical Treatments
                  </h3>
                  <Button onClick={openNewTreatmentForm} variant="secondary" size="sm" className="flex items-center gap-2 font-semibold">
                    <Plus className="h-4 w-4" />
                    <span>Add Treatment</span>
                  </Button>
                </div>

                {/* Grid Table of items */}
                <div className="bg-white rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left font-sans text-sm">
                      <thead className="bg-slate-50 border-b border-slate-200 font-display font-bold text-primary text-xs uppercase tracking-wider">
                        <tr>
                          <th className="py-4 px-6 w-20">Image</th>
                          <th className="py-4 px-6">Title</th>
                          <th className="py-4 px-6">Slug/ID</th>
                          <th className="py-4 px-6">Short Description</th>
                          <th className="py-4 px-6 w-32 text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {treatments.map((svc) => (
                          <tr key={svc.id} className="hover:bg-slate-50/50 transition-smooth">
                            <td className="py-4 px-6">
                              <div className="h-10 w-14 rounded-lg overflow-hidden border border-slate-200/60 bg-slate-100">
                                <img src={svc.imageUrl} alt={svc.title} className="w-full h-full object-cover" />
                              </div>
                            </td>
                            <td className="py-4 px-6 font-display font-bold text-primary">
                              {svc.title}
                            </td>
                            <td className="py-4 px-6 text-slate-500 font-mono text-xs">
                              {svc.id}
                            </td>
                            <td className="py-4 px-6 text-slate-500 text-xs truncate max-w-xs">
                              {svc.shortDesc}
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center justify-center gap-2.5">
                                <button
                                  onClick={() => openEditTreatmentForm(svc)}
                                  className="p-2 bg-slate-50 text-slate-500 hover:text-secondary hover:bg-secondary/10 rounded-xl transition-smooth cursor-pointer"
                                  title="Edit Treatment Details"
                                >
                                  <Edit2 className="h-4.5 w-4.5" />
                                </button>
                                <button
                                  onClick={() => handleTreatmentDelete(svc.id)}
                                  className="p-2 bg-slate-50 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-xl transition-smooth cursor-pointer"
                                  title="Delete Treatment"
                                >
                                  <Trash2 className="h-4.5 w-4.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ============================================================== */}
        {/* GALLERY TAB VIEW */}
        {/* ============================================================== */}
        {activeTab === "gallery" && (
          <div>
            {showGalleryForm ? (
              <Card className="p-8 border border-slate-200/80 bg-white max-w-xl mx-auto">
                <h3 className="font-display font-extrabold text-2xl text-primary mb-6">
                  Add New Photo Gallery Image
                </h3>
                
                <form onSubmit={handleGallerySubmit} className="space-y-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400">Photo Title</label>
                    <input
                      required
                      className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary"
                      placeholder="e.g. Implant Placement Success"
                      value={galleryForm.title}
                      onChange={e => setGalleryForm(prev => ({ ...prev, title: e.target.value }))}
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400">Category Section</label>
                    <select
                      className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary bg-white"
                      value={galleryForm.category}
                      onChange={e => setGalleryForm(prev => ({ ...prev, category: e.target.value as any }))}
                    >
                      <option value="our-clinic">Our Clinic</option>
                      <option value="happy-patients">Happy Patients</option>
                      <option value="after-treatment">After Treatment</option>
                      <option value="award">Awards & Milestones</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400">Description</label>
                    <textarea
                      required
                      className="border border-slate-200 rounded-xl px-4 py-2.5 font-sans text-sm focus:outline-none focus:border-secondary h-20"
                      placeholder="Brief details about the photo..."
                      value={galleryForm.description}
                      onChange={e => setGalleryForm(prev => ({ ...prev, description: e.target.value }))}
                    />
                  </div>

                  {/* Upload Image File Input */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-display font-bold uppercase text-slate-400 flex items-center gap-1.5">
                      <Upload className="h-3.5 w-3.5 text-secondary" />
                      <span>Upload Image File</span>
                    </label>
                    <div className="flex items-center gap-4">
                      {galleryForm.imageUrl && (
                        <div className="h-16 w-24 rounded-xl overflow-hidden border border-slate-200/80 bg-slate-100 shrink-0">
                          <img src={galleryForm.imageUrl} alt="Gallery preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div className="relative border border-dashed border-slate-200 bg-slate-50/50 rounded-xl p-3 flex items-center justify-between text-xs font-sans grow">
                        <input
                          type="file"
                          accept="image/*"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          onChange={e => handleImageUpload(e, "gallery")}
                          disabled={uploading}
                        />
                        <span className="text-slate-400 pl-2">
                          {uploading ? "Uploading..." : galleryForm.imageUrl ? "Change file..." : "Click to select file"}
                        </span>
                        <Button type="button" variant="outline" size="sm" className="pointer-events-none text-[10px] py-1 px-2.5">
                          Browse
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                    <Button type="button" variant="outline" onClick={() => setShowGalleryForm(false)} className="font-semibold text-sm">
                      Cancel
                    </Button>
                    <Button type="submit" variant="secondary" className="font-semibold text-sm">
                      Save Photo
                    </Button>
                  </div>
                </form>
              </Card>
            ) : (
              <div>
                {/* Header Actions */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display font-bold text-lg text-primary">
                    All Photo Gallery Images
                  </h3>
                  <Button onClick={() => setShowGalleryForm(true)} variant="secondary" size="sm" className="flex items-center gap-2 font-semibold">
                    <Plus className="h-4 w-4" />
                    <span>Add Photo</span>
                  </Button>
                </div>

                {/* Photo Grid List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {gallery.map((item) => (
                    <Card key={item.id} className="p-0 overflow-hidden flex flex-col justify-between border border-slate-200/70 shadow-sm bg-white">
                      <div>
                        {/* Image aspect-ratio */}
                        <div className="aspect-4/3 w-full bg-slate-100 overflow-hidden relative border-b border-slate-100">
                          <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                          <span className="absolute top-3 left-3 bg-secondary text-white text-[9px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                            {item.category.replace("-", " ")}
                          </span>
                        </div>
                        {/* Text Content */}
                        <div className="p-5">
                          <h4 className="font-display font-bold text-primary text-base truncate">
                            {item.title}
                          </h4>
                          <p className="font-sans text-xs text-slate-500 mt-1.5 leading-relaxed line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {/* Delete actions footer */}
                      <div className="p-4 border-t border-slate-50 flex items-center justify-end bg-slate-50/50">
                        <button
                          onClick={() => handleGalleryDelete(item.id)}
                          className="flex items-center gap-1.5 text-xs font-sans font-semibold text-red-500 hover:text-red-700 bg-red-50/30 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-smooth cursor-pointer"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Delete Image</span>
                        </button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
export default AdminDashboardClient;
