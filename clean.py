import os

with open('scanner.html', 'r') as f:
    lines = f.readlines()

new_lines = []
skip = False
for line in lines:
    if "<!-- SEARCH BAR -->" in line:
        skip = True
    if "<!-- FOOTER -->" in line:
        skip = False
    
    if not skip:
        new_lines.append(line)

with open('scanner.html', 'w') as f:
    f.writelines(new_lines)

print("scanner.html cleaned up.")
