import os
import re

dir_path = "/Users/emrxh/Documents/trench-dictionary"

for filename in os.listdir(dir_path):
    if filename.endswith(".html"):
        filepath = os.path.join(dir_path, filename)
        with open(filepath, 'r') as f:
            content = f.read()

        # Remove ticker
        content = re.sub(r'<!-- TICKER -->\s*<div class="ticker-wrap"?[^>]*>.*?</div>\s*</div>', '', content, flags=re.DOTALL)
        
        # Remove trending-meta-pill and the preceding pipe if it exists
        content = re.sub(r'<span>\|</span>\s*<span id="trending-meta-pill"[^>]*>.*?</span>', '', content, flags=re.DOTALL)
        content = re.sub(r'<span id="trending-meta-pill"[^>]*>.*?</span>', '', content, flags=re.DOTALL)

        # Remove bounty status bar
        content = re.sub(r'<!-- BOUNTY STATUS BANNER -->\s*<div class="bounty-status-bar"[^>]*>.*?</div>\s*</div>', '', content, flags=re.DOTALL)

        with open(filepath, 'w') as f:
            f.write(content)

print("Cleaned HTML files")
