export interface ServiceStep {
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  iconName: string;
  benefits: string[];
  fullDescription: string;
  whoIsItFor: string[];
  process: ServiceStep[];
  faqs: ServiceFAQ[];
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: "root-canal",
    title: "Painless Root Canal",
    shortDesc: "Save infected teeth with minimal discomfort using state-of-the-art micro-dentistry techniques.",
    longDesc: "A root canal treatment is designed to eliminate bacteria from the infected root canal, prevent reinfection of the tooth and save the natural tooth. At Smiles 4 U, we use advanced rotaries and digital imaging to perform painless, precise, and fast single-sitting root canals, preserving your natural smile.",
    iconName: "Activity",
    benefits: [
      "Relieves persistent toothache and swelling",
      "Saves the natural tooth from extraction",
      "Restores normal biting force and sensation",
      "Painless procedure using advanced local anesthetics"
    ],
    fullDescription: "Painless root canal therapy saves your natural teeth by removing inflamed or infected pulp tissue from inside the root canals. At Smiles 4 U, we utilize rotary endodontic files, apex locators, and digital X-rays to ensure the treatment is fast, precise, and completely pain-free.",
    whoIsItFor: [
      "Sharp pain when biting or chewing food",
      "Lingering sensitivity to hot or cold substances",
      "Swelling or tenderness in the surrounding gums",
      "Darkening or discoloration of a single tooth"
    ],
    process: [
      {
        title: "Digital Scan & Diagnosis",
        description: "High-resolution digital imaging to evaluate the shape and depth of the infection."
      },
      {
        title: "Painless Anesthesia",
        description: "Application of modern local anesthetics to ensure complete numbness before starting."
      },
      {
        title: "Infection Removal",
        description: "Advanced rotary files clean and sterilize the canals, removing all decay and bacteria."
      },
      {
        title: "Sealing & Restoration",
        description: "The sterile canals are sealed, and a dental crown is placed to restore full structural strength."
      }
    ],
    faqs: [
      {
        question: "Is a root canal painful?",
        answer: "No. With modern local anesthetics and rotary endodontics, a root canal feels no different from a standard dental filling."
      },
      {
        question: "Can a root canal be completed in a single sitting?",
        answer: "Yes, in most cases, our advanced digital scanning and rotary systems allow us to complete the entire treatment in a single sitting of 45-60 minutes."
      },
      {
        question: "How long does a root canal treated tooth last?",
        answer: "With proper dental hygiene and a crown, a root canal treated tooth can last a lifetime."
      }
    ],
    imageUrl: "/root-canal.webp"
  },
  {
    id: "implants-rehab",
    title: "Implants & Full Mouth Rehabilitation",
    shortDesc: "Durable titanium implants and complete restoration for missing teeth and structural strength.",
    longDesc: "Whether you have lost a single tooth or need a full arch replacement, our implant solutions look and function exactly like natural teeth. Dr. Millin D. Desai is a leading implant specialist, conducting high-success rehabilitation procedures utilizing digital guided techniques for maximum precision.",
    iconName: "Shield",
    benefits: [
      "Permanent solution with natural appearance",
      "Prevents bone loss in the jaw",
      "Improves chewing ability and speech articulation",
      "Stabilizes adjacent teeth"
    ],
    fullDescription: "Dental implants are the gold standard for replacing missing teeth, replicating both the root and the crown. Dr. Millin D. Desai specializes in full mouth reconstructions and computer-guided implant surgeries, offering permanent stability, natural speech, and restored bite force.",
    whoIsItFor: [
      "One or more missing teeth due to decay or injury",
      "Loose, shifting, or uncomfortable dentures",
      "Bone loss in the jaw area from long-term missing teeth",
      "Difficulty chewing food properly or clear speech articulation"
    ],
    process: [
      {
        title: "Comprehensive Assessment",
        description: "3D CBCT scans and digital impressions to map your jawbone density."
      },
      {
        title: "Guided Placement",
        description: "Surgical placement of a biocompatible titanium post under local anesthesia."
      },
      {
        title: "Osseointegration",
        description: "A healing period of 3-4 months allows the implant to fuse permanently with the jawbone."
      },
      {
        title: "Crown Attachment",
        description: "Custom-made ceramic or zirconia crowns are fixed to the implant, restoring your smile."
      }
    ],
    faqs: [
      {
        question: "How long do dental implants last?",
        answer: "Dental implants are designed to be a permanent, lifetime solution with proper brushing, flossing, and regular dental checkups."
      },
      {
        question: "Am I a candidate for dental implants?",
        answer: "Most adults with healthy gums and sufficient jawbone density are excellent candidates. If bone density is low, we offer bone grafting procedures."
      },
      {
        question: "Is implant surgery painful?",
        answer: "No. The procedure is performed under local anesthesia, and post-operative discomfort is minimal, easily managed with standard pain relievers."
      }
    ],
    imageUrl: "/implants-rehab.webp"
  },
  {
    id: "smile-makeover",
    title: "Smile Makeover & Cosmetic Dentistry",
    shortDesc: "Aesthetic enhancement utilizing custom veneers, alignments, whitening, and contouring.",
    longDesc: "Transform your smile with customized aesthetic dentistry. We offer dental bonding, porcelain veneers, tooth contouring, gum depigmentation, and teeth whitening to fix gaps, stains, chips, or alignment issues, giving you a beautiful, confident smile.",
    iconName: "Sparkles",
    benefits: [
      "Corrects teeth discoloration and spacing",
      "Aligns slightly crooked teeth without braces",
      "Boosts self-esteem and social confidence",
      "Custom shade matching for natural results"
    ],
    fullDescription: "Transform your smile with customized aesthetic dentistry. We combine porcelain veneers, composite bonding, gum contouring, and advanced whitening to correct spaces, chips, stains, or slight misalignments.",
    whoIsItFor: [
      "Gaps or uneven spacing between front teeth",
      "Yellowing, discolored, or heavily stained teeth",
      "Chipped, cracked, or worn down teeth edges",
      "Uneven or low-sitting gum lines"
    ],
    process: [
      {
        title: "Aesthetic Consultation",
        description: "Digital smile analysis to discuss your cosmetic goals and shade preferences."
      },
      {
        title: "Preparation & Mockup",
        description: "Minimal preparation of the teeth (if required) and creating a temporary mockup."
      },
      {
        title: "Custom Fabrication",
        description: "Handcrafting ultra-thin restorations using advanced CAD/CAM technology."
      },
      {
        title: "Final Bonding",
        description: "Adhering the veneers or bonding materials to the teeth, creating a flawless smile."
      }
    ],
    faqs: [
      {
        question: "What is a Smile Makeover?",
        answer: "It is a comprehensive treatment plan that combines multiple cosmetic procedures to improve the appearance of your teeth, gums, and smile line."
      },
      {
        question: "How long do veneers last?",
        answer: "Porcelain veneers typically last 10 to 15 years, while composite bonding lasts 5 to 7 years before needing touch-ups."
      },
      {
        question: "Will my new smile look natural?",
        answer: "Yes! We customize the shade, shape, and translucency of each restoration to blend seamlessly with your natural facial features."
      }
    ],
    imageUrl: "/smile-makeover.webp"
  },
  {
    id: "dental-tourism",
    title: "Dental Tourism",
    shortDesc: "High-quality, affordable dental treatments combined with travel assistance for international patients.",
    longDesc: "Smiles 4 U is a trusted hub for international patients seeking world-class dental care at a fraction of the cost in their home countries. We offer seamless assistance, including pre-visit online consults, customized treatment timelines, and coordination of local travel in Mumbai.",
    iconName: "Globe",
    benefits: [
      "International standard treatments at affordable rates",
      "Saves up to 70% compared to Western countries",
      "Express treatment completion matching your travel dates",
      "Assistance with accommodation and local logistics"
    ],
    fullDescription: "Get international-quality dental care in Mumbai, combined with travel and accommodation support. Smiles 4 U offers cost-effective cosmetic makeovers, dental implants, and full mouth rehabilitations for patients from the US, UK, Canada, UAE, and Australia.",
    whoIsItFor: [
      "Patients looking for affordable high-quality implants",
      "High dental costs in home countries",
      "Combining dental care with vacation",
      "Seeking certified dental experts"
    ],
    process: [
      {
        title: "Virtual Consultation",
        description: "Sharing dental X-rays and photographs online to discuss treatment plans and get estimates."
      },
      {
        title: "Itinerary Coordination",
        description: "Scheduling priority booking dates to fit your travel timeline."
      },
      {
        title: "In-Clinic Treatment",
        description: "Express laboratory turnaround times to complete your treatments within your stay."
      },
      {
        title: "Follow-up & Support",
        description: "Post-treatment guidelines and virtual checks after you return home."
      }
    ],
    faqs: [
      {
        question: "Why choose dental tourism in Mumbai?",
        answer: "You can save up to 70% on major dental treatments compared to Western countries, while receiving care from US/European certified specialists using identical dental brands."
      },
      {
        question: "How long will my treatment take?",
        answer: "Simple veneers or implants can be completed in 7-10 days. We arrange express dental lab services to fit your travel itinerary."
      },
      {
        question: "How do we coordinate before travel?",
        answer: "We schedule a video consult to analyze your scans, provide a guaranteed estimate, and coordinate with your local travel plans."
      }
    ],
    imageUrl: "/dental-tourism.jpg"
  },
  {
    id: "preventative-care",
    title: "Preventative Treatment (Smile Suraksha)",
    shortDesc: "Regular cleanings, checkups, and scaling packages designed to prevent complex issues.",
    longDesc: "Maintenance is the key to lifetime oral health. Our preventative dental care program keeps decay and gum disease at bay. Under our 'Smile Suraksha' preventative AMC plan, we cover routing scalings, diagnostic X-rays, and comprehensive reviews for complete family protection.",
    iconName: "HeartPulse",
    benefits: [
      "Detects cavities early, avoiding root canals",
      "Eliminates bad breath and plaque buildup",
      "Protects systemic health (diabetes & heart connections)",
      "Covers routine checks under affordable AMC pricing"
    ],
    fullDescription: "Our 'Smile Suraksha' preventative program is designed to keep your teeth and gums healthy for a lifetime. We focus on regular scaling, deep cleaning, dental sealants, fluoride varnishes, and early detection of decay to save you from complex dental issues.",
    whoIsItFor: [
      "Bleeding gums during brushing or flossing",
      "Persistent bad breath (halitosis)",
      "Teeth stains from tea, coffee, or food colors",
      "Desire to prevent complex cavities and gum diseases"
    ],
    process: [
      {
        title: "Comprehensive Examination",
        description: "Multi-point visual check and digital diagnostic X-rays."
      },
      {
        title: "Ultrasonic Scaling",
        description: "Painless removal of plaque, tartar, and bacterial buildup from teeth and gums."
      },
      {
        title: "Polishing & Stain Removal",
        description: "Enhancing enamel smoothness and eliminating external stains."
      },
      {
        title: "Preventative Care Plan",
        description: "Recommending proper brushing techniques, mouth rinses, and routine follow-up intervals."
      }
    ],
    faqs: [
      {
        question: "What is the Smile Suraksha plan?",
        answer: "It is our annual preventative maintenance package covering bi-annual scaling, checkups, and diagnostic X-rays at a discounted price."
      },
      {
        question: "How often should I get a dental cleaning?",
        answer: "We recommend a professional ultrasonic cleaning every 6 months to prevent tartar buildup and gum recession."
      },
      {
        question: "Does scaling weaken teeth?",
        answer: "No. Scaling only removes calcified tartar (stones) on the teeth. It does not affect the tooth enamel in any way."
      }
    ],
    imageUrl: "/smile-suraksha.webp"
  },
  {
    id: "complete-dentistry",
    title: "Complete & Geriatric Dentistry",
    shortDesc: "Specialized senior oral care, full/partial dentures, and tooth wear management.",
    longDesc: "Senior dental care requires patience and specialized expertise. We design lightweight, comfortable, and natural-looking complete and partial dentures. We also treat dry mouth, root caries, and severe tooth wear, restoring full chewing capacity for elderly patients.",
    iconName: "Users",
    benefits: [
      "Custom-fit, comfortable dentures that don't slip",
      "Improves digestion by enabling proper chewing",
      "Restores structural support to facial muscles",
      "Gentle and compassionate care for elderly patients"
    ],
    fullDescription: "Comprehensive, gentle, and specialized oral care for senior citizens. We offer custom-fabricated lightweight dentures, implant-supported overdentures, treatment for dry mouth, and specialized management of root decay to restore comfortable chewing and speech.",
    whoIsItFor: [
      "Seniors with multiple missing teeth or tooth loss",
      "Loose, sliding, or unstable traditional dentures",
      "Difficulty chewing healthy foods due to dental wear",
      "Dry mouth or highly sensitive gums in older age"
    ],
    process: [
      {
        title: "Gentle Diagnostic Review",
        description: "Reviewing medical histories, joint comfort, and soft tissue health."
      },
      {
        title: "Digital Impressions",
        description: "Capturing digital details of the gums without messy plaster trays."
      },
      {
        title: "Custom Denture Fabrication",
        description: "Creating dentures that are contoured to fit the mouth comfortably and look natural."
      },
      {
        title: "Adjustment & Fitting",
        description: "Multi-step testing to eliminate high spots, ensuring stable biting and speech."
      }
    ],
    faqs: [
      {
        question: "What are implant-supported dentures?",
        answer: "These are dentures that snap onto 2 or 4 dental implants, completely eliminating the slipping, clicking, and messy adhesives of traditional dentures."
      },
      {
        question: "How long does it take to get used to new dentures?",
        answer: "It typically takes 2 to 4 weeks to adjust to speaking and chewing with new dentures. We provide detailed guide instructions and touch-up visits."
      },
      {
        question: "Do you treat dry mouth in seniors?",
        answer: "Yes. Seniors often experience dry mouth (xerostomia) due to medications. We offer specialized saliva substitutes and therapeutic rinses."
      }
    ],
    imageUrl: "/geriatric.jpg"
  },
  {
    id: "ceramic-crowns-veneers",
    title: "Ceramic Crowns & Veneers",
    shortDesc: "Premium metal-free restorations that offer superior aesthetics and longevity.",
    longDesc: "Say goodbye to dark metal lines. We provide premium metal-free zirconia and E-max ceramic crowns and ultra-thin porcelain veneers. These restorations offer excellent strength and duplicate the natural light-reflecting properties of tooth enamel.",
    iconName: "Gem",
    benefits: [
      "100% biocompatible and metal-free (no allergic reactions)",
      "Unmatched natural translucency and beauty",
      "Highly resistant to stains and chipping",
      "Perfect fit using CAD/CAM digital scanning"
    ],
    fullDescription: "Restore damaged, decayed, or cosmetic-flawed teeth with metal-free zirconia and E-max ceramic restorations. Our CAD/CAM custom crowns and ultra-thin veneers offer the exact translucency, shine, and durability of natural enamel.",
    whoIsItFor: [
      "Fractured, cracked, or heavily decayed teeth",
      "Large unsightly silver or composite fillings",
      "Severely discolored teeth that do not whiten",
      "Slight teeth misalignments or worn down enamel edges"
    ],
    process: [
      {
        title: "Digital Scanning",
        description: "3D virtual impressions to capture the microscopic details of the prepared tooth."
      },
      {
        title: "CAD/CAM Design",
        description: "Precision digital rendering of the crown or veneer in our laboratory."
      },
      {
        title: "Milling & Custom Glazing",
        description: "Milling the crown from a block of zirconia or E-max ceramic, custom shaded."
      },
      {
        title: "Cementation",
        description: "Permanent bonding of the restoration using medical-grade cements, restoring full function."
      }
    ],
    faqs: [
      {
        question: "What is the difference between a crown and a veneer?",
        answer: "A crown covers the entire tooth to restore strength, while a veneer is a thin ceramic shell bonded only to the front surface for cosmetic enhancements."
      },
      {
        question: "Are zirconia crowns better than metal-ceramic (PFM) crowns?",
        answer: "Yes. Zirconia is 100% biocompatible, metal-free, does not cause dark metal lines near the gums, and offers superior lifelike aesthetics."
      },
      {
        question: "How long do E-max veneers last?",
        answer: "E-max veneers can last 12-15 years or longer with proper home care and regular dental checkups."
      }
    ],
    imageUrl: "/ceramic-crown-veener.webp"
  },
  {
    id: "braces-aligners",
    title: "Braces & Clear Aligners (Invisalign)",
    shortDesc: "Correct crooked teeth using traditional braces or invisible clear aligners.",
    longDesc: "Get straight teeth comfortably and discreetly. We offer standard metal and ceramic braces, as well as invisible clear aligners (including Invisalign). Our orthodontic treatments correct overbites, underbites, crossbites, and overcrowding for teens and adults.",
    iconName: "Grid",
    benefits: [
      "Virtually invisible treatment options (aligners)",
      "Improves jaw alignment and speech clarity",
      "Easier oral hygiene once teeth are aligned",
      "Customized digital treatment simulation"
    ],
    fullDescription: "Get a perfectly aligned smile using modern orthodontic solutions. We offer traditional metal braces, ceramic braces, and invisible clear aligners (including Invisalign) to fix crowding, spacing, overbites, and crooked teeth.",
    whoIsItFor: [
      "Crowded, crooked, or overlapping teeth",
      "Gaps or spaces between teeth arches",
      "Overbite, underbite, crossbite, or jaw alignment issues",
      "Teens and adults seeking a straight smile discreetly"
    ],
    process: [
      {
        title: "Orthodontic Records",
        description: "Taking digital scans, facial photos, and specialized jaw X-rays."
      },
      {
        title: "Treatment Simulation",
        description: "Creating a 3D simulation showing step-by-step teeth movement and the final result."
      },
      {
        title: "Appliance Fitting",
        description: "Placing braces brackets or delivering your custom set of clear aligner trays."
      },
      {
        title: "Periodic Monitoring",
        description: "Brief checkups every 4-6 weeks to monitor progress and adjust aligners/braces."
      }
    ],
    faqs: [
      {
        question: "What are the benefits of clear aligners over braces?",
        answer: "Clear aligners are virtually invisible, completely removable for easy brushing/eating, and have no sharp wires that can irritate your gums."
      },
      {
        question: "How long does aligner/braces treatment take?",
        answer: "Most treatments are completed in 9 to 18 months, depending on the severity of the misalignment."
      },
      {
        question: "Can adults get clear aligners?",
        answer: "Absolutely! Clear aligners are highly popular among adults because they align teeth discreetly without affecting professional look."
      }
    ],
    imageUrl: "/braces-aligners.webp"
  },
  {
    id: "child-dentistry",
    title: "Child & Pediatric Dentistry",
    shortDesc: "Gentle dental care for kids, including fluoride therapy, sealants, and habit correction.",
    longDesc: "Creating positive dental experiences early in life is our priority. We offer fluoride varnishes to prevent decay, dental sealants to protect chewing surfaces, habit breaking appliances, and gentle pediatric tooth extractions in a friendly, stress-free environment.",
    iconName: "Smile",
    benefits: [
      "Prevents early childhood tooth decay",
      "Monitors erupting permanent teeth alignment",
      "Friendly, non-intimidating pediatric environment",
      "Corrects thumb-sucking and mouth-breathing habits"
    ],
    fullDescription: "Dedicated, gentle, and fun pediatric oral care. We help children develop healthy habits, protect teeth from decay using fluoride and sealants, and provide stress-free treatments designed specifically for kids.",
    whoIsItFor: [
      "Preventing cavities in milk teeth and permanent teeth",
      "Deep grooves in molars requiring dental sealants",
      "Thumb-sucking, mouth-breathing, or tongue-thrusting habits",
      "First dental checkups and cleaning for young children"
    ],
    process: [
      {
        title: "Friendly Meet & Greet",
        description: "Familiarizing the child with the dental chair in a relaxed, game-like setting."
      },
      {
        title: "Gentle Scaling & Checkup",
        description: "Reviewing decay levels, jaw development, and erupting teeth."
      },
      {
        title: "Fluoride / Sealant Application",
        description: "Painting preventative layers on teeth to shield them from bacterial decay."
      },
      {
        title: "Parent Guidance",
        description: "Reviewing diet habits, brushing techniques, and corrective growth milestones."
      }
    ],
    faqs: [
      {
        question: "When should my child first visit the dentist?",
        answer: "We recommend the first dental visit by their first birthday, or when their first tooth erupts, to establish a preventive routine."
      },
      {
        question: "What are dental sealants?",
        answer: "Sealants are thin plastic coatings painted on the chewing surfaces of permanent back teeth (molars) to prevent food and bacteria from getting trapped."
      },
      {
        question: "How do we handle dental anxiety in children?",
        answer: "Our team uses gentle child-management techniques (Tell-Show-Do) and a warm, playful environment to build trust and eliminate fear."
      }
    ],
    imageUrl: "/child-treatment.jpg"
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    shortDesc: "Advanced, bloodless, and stitch-free soft tissue treatments and gum reshaping.",
    longDesc: "Laser dentistry is an innovative tool that makes soft tissue treatments faster and virtually painless. We utilize dental lasers for gum depigmentation, tongue-tie release (frenectomy), treating aphthous ulcers, and sterilizing root canals, reducing healing times dramatically.",
    iconName: "Zap",
    benefits: [
      "Minimally invasive, no scalpels or stitches",
      "Minimal bleeding and swelling post-procedure",
      "Reduced risk of post-operative infections",
      "Ultra-fast healing and recovery times"
    ],
    fullDescription: "Painless, bloodless, and stitch-free soft tissue dental treatments using soft-tissue lasers. We utilize lasers for gum contouring, depigmentation, tongue-tie release, and disinfection of root canals, ensuring quick recovery.",
    whoIsItFor: [
      "Dark or pigmented spots on the gums",
      "Tongue-tie or lip-tie restricting normal movement",
      "Excessive gum tissue leading to a 'gummy smile'",
      "Desire for bloodless, stitch-free soft tissue surgeries"
    ],
    process: [
      {
        title: "Laser Calibration",
        description: "Adjusting the laser wavelength specifically for the target soft tissue."
      },
      {
        title: "Tissue Treatment",
        description: "Applying the laser energy to sterilize, reshape, or release soft tissues gently."
      },
      {
        title: "Instant Cauterization",
        description: "The laser seals blood vessels and nerve endings instantly as it treats."
      },
      {
        title: "Rapid Recovery",
        description: "Reviewing recovery milestones, which require minimal medication due to fast healing."
      }
    ],
    faqs: [
      {
        question: "Is laser dentistry safe?",
        answer: "Yes, it is extremely safe. We use specialized protective eyewear during the procedure, and the treatment is highly localized."
      },
      {
        question: "What is gum depigmentation?",
        answer: "It is a cosmetic laser procedure that removes dark melanin spots from the gums, turning them into a healthy, natural pink shade."
      },
      {
        question: "Does laser surgery require stitches?",
        answer: "No. Because the laser cauterizes the tissue instantly as it cuts, there is no bleeding and no stitches are required."
      }
    ],
    imageUrl: "/laser-dentistry.webp"
  },
  {
    id: "dental-scanner",
    title: "3D Intraoral Dental Scanner",
    shortDesc: "Ditch messy plaster molds for fast, comfortable, and accurate 3D digital impressions.",
    longDesc: "No more gagging on sticky plaster trays. Our clinic features advanced 3D intraoral digital scanners to capture highly detailed virtual models of your mouth. These digital scans are sent instantly to the laboratory for CAD/CAM crowns, veneers, or clear aligner design.",
    iconName: "Camera",
    benefits: [
      "Extremely comfortable scanning without gagging",
      "Higher precision and perfect fit for crowns and aligners",
      "Instant visual preview of your dental anatomy",
      "Environmentally friendly digital workflows"
    ],
    fullDescription: "High-definition digital impressions that replace traditional plaster molds. Our digital scanners capture the microscopic detail of your teeth, ensuring perfectly fitting crowns, aligners, and dental implants.",
    whoIsItFor: [
      "Patients who gag or feel discomfort during plaster impressions",
      "Preparation for zirconia crowns, veneers, or bridges",
      "Invisalign aligner treatment simulations",
      "Precision computer-guided implant placement"
    ],
    process: [
      {
        title: "Scanning Wand Guide",
        description: "Moving a small, wand-like scanner comfortably around your teeth."
      },
      {
        title: "Real-time 3D Render",
        description: "The scanner captures thousands of images per second, building a 3D model on screen."
      },
      {
        title: "CAD/CAM Lab Transmission",
        description: "Sending the digital model instantly to our laboratory for precise design."
      },
      {
        title: "Perfect Restoration",
        description: "Fast, highly accurate, and comfortable crown or aligner delivery."
      }
    ],
    faqs: [
      {
        question: "Does the 3D scanner emit radiation?",
        answer: "No. The intraoral scanner uses safe, visible light imaging (cameras) to capture teeth surfaces. There is zero X-ray radiation."
      },
      {
        question: "Is the digital scan accurate?",
        answer: "Yes. Digital scans are accurate to the micron level, completely removing the margin of error associated with traditional plaster trays."
      },
      {
        question: "How long does a full mouth scan take?",
        answer: "It takes less than 3 to 5 minutes to capture a highly detailed 3D model of your entire upper and lower jaws."
      }
    ],
    imageUrl: "/3d-intraoral.webp"
  },
  {
    id: "sports-night-guard",
    title: "Sports Guard & Night Guard",
    shortDesc: "Custom dental guards to protect teeth during athletics and prevent night grinding (bruxism).",
    longDesc: "We provide custom-fabricated night guards and sports guards. Night guards protect your teeth and jaw from the destructive effects of clenching and grinding (bruxism) during sleep, while our heavy-duty sports mouthguards shield your teeth, gums, and bone from impact during athletic activities.",
    iconName: "Shield",
    benefits: [
      "Prevents tooth wear, fractures, and chips from grinding",
      "Shields teeth from high-impact sports trauma",
      "Custom-fit comfort that allows easy breathing and speaking",
      "Reduces morning jaw soreness and headaches"
    ],
    fullDescription: "Custom-made dental guards designed to protect your teeth. Night guards protect teeth from night clenching and grinding (bruxism), while sports guards shield your mouth from traumatic injury during athletic activities.",
    whoIsItFor: [
      "Teeth grinding or jaw clenching during sleep (bruxism)",
      "Waking up with morning headaches or jaw stiffness",
      "Athletes participating in contact or high-impact sports",
      "Desire to prevent enamel wear, fractures, and chipping"
    ],
    process: [
      {
        title: "Digital Mouth Scan",
        description: "Creating a highly detailed digital impression of your arches."
      },
      {
        title: "Custom Fabrication",
        description: "Fabricating a guard of precise thickness in our dental laboratory."
      },
      {
        title: "Fitting & Adjustments",
        description: "Testing the guard in your mouth, ensuring comfortable fit and easy breathing."
      },
      {
        title: "Maintenance Advice",
        description: "Explaining proper cleaning and storage protocols to extend guard life."
      }
    ],
    faqs: [
      {
        question: "Why choose a custom guard over store-bought guards?",
        answer: "Custom guards fit securely over your teeth, do not slip out, distribute impact forces evenly, and let you speak and breathe comfortably."
      },
      {
        question: "How do I know if I need a night guard?",
        answer: "If you wake up with morning jaw soreness, headaches, or notice flat, worn-down surfaces on your back teeth, you likely grind."
      },
      {
        question: "How long does a custom guard last?",
        answer: "A custom night guard or sports mouthguard typically lasts 2 to 3 years before needing replacement due to normal wear."
      }
    ],
    imageUrl: "/sports-night-guard.webp"
  },
  {
    id: "anti-snoring-device",
    title: "Anti-snoring Device",
    shortDesc: "Custom mandibular advancement devices to keep airways clear and eliminate snoring.",
    longDesc: "Say goodbye to restless nights. Our custom anti-snoring devices (Mandibular Advancement Splints) gently slide the lower jaw forward during sleep. This keeps your throat airway open, prevents tissue vibration, and eliminates loud snoring, improving oxygen flow and sleep quality.",
    iconName: "Moon",
    benefits: [
      "Non-invasive, comfortable, and easy-to-wear device",
      "Significantly reduces or eliminates snoring",
      "Improves nighttime breathing and oxygen saturation",
      "Compact and travel-friendly alternative to CPAP"
    ],
    fullDescription: "Custom-designed Mandibular Advancement Splints that keep your airway clear while you sleep. These comfortable, non-invasive oral appliances keep the lower jaw slightly forward, eliminating snoring and improving sleep quality.",
    whoIsItFor: [
      "Loud, chronic snoring that disrupts sleep",
      "Mild to moderate obstructive sleep apnea (OSA)",
      "Waking up gasping for air or with morning fatigue",
      "Looking for a quiet, travel-friendly alternative to CPAP machines"
    ],
    process: [
      {
        title: "Airway Evaluation",
        description: "Discussing your sleep habits, snoring severity, and jaw joint movement."
      },
      {
        title: "3D Impression Scan",
        description: "Scanning your upper and lower arches to ensure a precise, locked fit."
      },
      {
        title: "Splint Fabrication",
        description: "Fabricating custom-designed trays connected by adjusters in the lab."
      },
      {
        title: "Bite Calibration",
        description: "Tuning the splint advancement to ensure optimal airway opening and joint comfort."
      }
    ],
    faqs: [
      {
        question: "How does an anti-snoring device work?",
        answer: "It gently advances the lower jaw forward. This pulls the tongue and soft palate forward, preventing airway blockages that cause snoring."
      },
      {
        question: "Is the device comfortable to wear?",
        answer: "Yes! Unlike CPAP machines, there are no masks or noise. The device is custom-fit, lightweight, and allows you to open/close your mouth."
      },
      {
        question: "Does it treat obstructive sleep apnea (OSA)?",
        answer: "Yes. Mandibular advancement devices are a clinically proven treatment for mild to moderate obstructive sleep apnea (OSA)."
      }
    ],
    imageUrl: "/anti-snoring.jpg"
  },
  {
    id: "tmd-splint-therapy",
    title: "TMD & Splint Therapy",
    shortDesc: "Therapeutic jaw splints and custom treatments to relieve TMJ pain and jaw stiffness.",
    longDesc: "TMD (Temporomandibular Joint Disorder) can cause severe pain, clicking sounds, and locked jaws. Our customized splint therapy utilizes therapeutic orthotics to reposition the jaw joint, unload the TMJ disk, and relax hyperactive chewing muscles, providing fast, lasting relief from pain and stiffness.",
    iconName: "Activity",
    benefits: [
      "Relieves chronic jaw pain, clicks, and lockjaw",
      "Reduces neck, face, and shoulder muscle tension",
      "Protects the TMJ joint disks from permanent wear",
      "Customized adjustments for long-term jaw realignment"
    ],
    fullDescription: "Custom orthodontic splints and therapy to treat Temporomandibular Joint Disorder (TMD). We relieve jaw pain, clicking sounds, locking jaws, and chew-muscle fatigue by unburdening the joint discs.",
    whoIsItFor: [
      "Pain, tenderness, or stiffness in the jaw joint (TMJ)",
      "Clicking, popping, or grating sounds when opening the mouth",
      "Locked jaw or limited range of mouth opening",
      "Chronic facial pain, neck aches, or muscle soreness"
    ],
    process: [
      {
        title: "Jaw Joint Examination",
        description: "Analyzing range of motion, muscle soreness, joint clicks, and bite alignment."
      },
      {
        title: "Therapeutic Scan",
        description: "Creating 3D digital scans of the arches for precise splint layout."
      },
      {
        title: "Custom Splint Delivery",
        description: "Fitting a custom-crafted acrylic splint over the teeth."
      },
      {
        title: "Bite Tuning Visits",
        description: "Periodic adjustments to reposition the joint disk and relax muscles over time."
      }
    ],
    faqs: [
      {
        question: "What causes TMD?",
        answer: "TMD can be caused by teeth grinding, emotional stress, misaligned bites, or trauma to the jaw joint."
      },
      {
        question: "What is a TMD splint?",
        answer: "It is a custom orthotic appliance worn over your teeth. It prevents clenching, unloads the jaw joint, and trains muscles to relax."
      },
      {
        question: "How long does splint therapy take to work?",
        answer: "Many patients experience significant pain relief within 2 to 4 weeks, with full joint stabilization taking 3 to 6 months of therapy."
      }
    ],
    imageUrl: "/tmd-splint.webp"
  }
];
