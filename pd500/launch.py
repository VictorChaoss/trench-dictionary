import sys
import os
import re
import subprocess

if len(sys.argv) < 2:
    print("Usage: python3 launch.py <NEW_CA>")
    sys.exit(1)

new_ca = sys.argv[1].strip()
display_ca = f"{new_ca[:4]}...{new_ca[-4:]}"

dir_path = "/Users/emrxh/Documents/trench-dictionary"

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Update clipboard writeText
        content = re.sub(r'navigator\.clipboard\.writeText\(\'[a-zA-Z0-9]+\'\)', 
                         f"navigator.clipboard.writeText('{new_ca}')", content)
        
        # Update CA display value
        content = re.sub(r'<span class="ca-value">.*?</span>', 
                         f'<span class="ca-value">{display_ca}</span>', content)

        with open(filepath, 'w') as f:
            f.write(content)

print(f"Updated CA to {new_ca} across HTML files.")

subprocess.run(["git", "add", "."], cwd=dir_path)
subprocess.run(["git", "commit", "-m", f"🚀 LAUNCH: Set CA to {new_ca}"], cwd=dir_path)
subprocess.run(["git", "push", "origin", "main"], cwd=dir_path)
print("🚀 Successfully pushed CA change to main!")
