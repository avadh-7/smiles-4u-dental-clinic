import os
import re

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\smiles4u-dental-clinic"
gallery_ts_path = os.path.join(project_dir, "src", "data", "gallery.ts")

with open(gallery_ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# Fallback mappings for the 5 failed Unsplash downloads
fallbacks = {
    "g-clinic-3": "/3d-intraoral.webp",
    "g-patient-1": "/child-treatment.jpg",
    "g-after-1": "/smile-makeover.webp",
    "g-award-1": "/doctor.webp",
    "g-award-2": "/dental-tourism.jpg"
}

for item_id, local_path in fallbacks.items():
    # Replace the cloud URL with the local fallback path
    pattern = re.compile(
        rf'(id:\s*"{item_id}",[\s\S]*?imageUrl:\s*")([^"]+)(")', 
        re.MULTILINE
    )
    content = pattern.sub(rf'\g<1>{local_path}\g<3>', content)
    print(f"Mapped {item_id} to local fallback: {local_path}")

with open(gallery_ts_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Remaining gallery items mapped to local fallback assets successfully!")
