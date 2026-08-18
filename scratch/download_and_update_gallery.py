import os
import re
import urllib.request

project_dir = r"C:\Users\AVADH\.gemini\antigravity\scratch\smiles4u-dental-clinic"
gallery_ts_path = os.path.join(project_dir, "src", "data", "gallery.ts")
public_gallery_dir = os.path.join(project_dir, "public", "gallery")

# Ensure target directory exists
os.makedirs(public_gallery_dir, exist_ok=True)

with open(gallery_ts_path, "r", encoding="utf-8") as f:
    content = f.read()

# Regular expression to find blocks like:
# {
#   id: "g-clinic-1",
#   ...
#   imageUrl: "https://..."
# }
pattern = re.compile(
    r'\{\s*id:\s*"([^"]+)",[\s\S]*?imageUrl:\s*"([^"]+)"\s*\}', 
    re.MULTILINE
)

matches = pattern.findall(content)
print(f"Found {len(matches)} gallery items to download.")

for item_id, url in matches:
    # Target local filename
    local_filename = f"{item_id}.jpg"
    local_path = os.path.join(public_gallery_dir, local_filename)
    local_url_path = f"/gallery/{local_filename}"
    
    print(f"Downloading {item_id}: {url} -> {local_url_path}")
    
    try:
        # Download the file
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            with open(local_path, "wb") as out_file:
                out_file.write(response.read())
        
        # Replace the imageUrl value in the TS content
        # We target the specific item block to make sure it's accurate
        item_block_pattern = re.compile(
            rf'(id:\s*"{item_id}",[\s\S]*?imageUrl:\s*")([^"]+)(")', 
            re.MULTILINE
        )
        content = item_block_pattern.sub(rf'\g<1>{local_url_path}\g<3>', content)
        print(f"[OK] Successfully downloaded and updated reference for {item_id}")
        
    except Exception as e:
        print(f"[ERROR] Failed to download {item_id}: {e}")

# Save the updated gallery.ts file
with open(gallery_ts_path, "w", encoding="utf-8") as f:
    f.write(content)

print("\nFinished processing gallery images.")
