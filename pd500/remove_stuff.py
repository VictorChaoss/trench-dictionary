import os
import re

dir_path = "/Users/emrxh/Documents/trench-dictionary"

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Remove leaderboard links
        content = re.sub(r'<a[^>]*href="leaderboard\.html"[^>]*>.*?</a>', '', content, flags=re.DOTALL)
        
        # Remove CA box
        content = re.sub(r'<div class="ca-box".*?</div>', '', content, flags=re.DOTALL)

        with open(filepath, 'w') as f:
            f.write(content)

if os.path.exists(os.path.join(dir_path, 'leaderboard.html')):
    os.remove(os.path.join(dir_path, 'leaderboard.html'))

print("Removed leaderboard and CA")
