# 🔧 GitHub Username Configuration

You need to replace `YOUR-GITHUB-USERNAME` in several files with your actual GitHub username.

---

## 📝 Your GitHub Username

**Enter your GitHub username here:** `_____________________`

Example: If your GitHub profile is `github.com/john-doe`, your username is `john-doe`

---

## 📂 Files That Need Your Username

### 1. **index.html** (Main website file)

Find and replace these lines:

**Line ~10-25** (Meta tags section):
```html
<!-- OLD -->
<meta property="og:url" content="https://YOUR-GITHUB-USERNAME.github.io/valentine-day/">
<meta property="og:image" content="https://YOUR-GITHUB-USERNAME.github.io/valentine-day/preview.png">
<meta name="twitter:url" content="https://YOUR-GITHUB-USERNAME.github.io/valentine-day/">
<link rel="canonical" href="https://YOUR-GITHUB-USERNAME.github.io/valentine-day/">

<!-- NEW (example with username: john-doe) -->
<meta property="og:url" content="https://john-doe.github.io/valentine-day/">
<meta property="og:image" content="https://john-doe.github.io/valentine-day/preview.png">
<meta name="twitter:url" content="https://john-doe.github.io/valentine-day/">
<link rel="canonical" href="https://john-doe.github.io/valentine-day/">
```

**Line ~35-40** (Structured Data):
```javascript
"url": "https://YOUR-GITHUB-USERNAME.github.io/valentine-day/",

// Change to:
"url": "https://john-doe.github.io/valentine-day/",
```

---

### 2. **README.md** (Repository documentation)

**Line ~13**:
```markdown
<!-- OLD -->
**✨ Live Demo:** `https://YOUR-GITHUB-USERNAME.github.io/valentine-day/`

<!-- NEW -->
**✨ Live Demo:** `https://john-doe.github.io/valentine-day/`
```

**Multiple locations** - Replace all instances of:
- `YOUR-USERNAME` → `john-doe`
- `YOUR-GITHUB-USERNAME` → `john-doe`

---

### 3. **sitemap.xml**

**Lines 6, 18**:
```xml
<!-- OLD -->
<loc>https://YOUR-GITHUB-USERNAME.github.io/valentine-day/</loc>
<image:loc>https://YOUR-GITHUB-USERNAME.github.io/valentine-day/preview.png</image:loc>

<!-- NEW -->
<loc>https://john-doe.github.io/valentine-day/</loc>
<image:loc>https://john-doe.github.io/valentine-day/preview.png</image:loc>
```

---

### 4. **robots.txt**

**Line 6**:
```
# OLD
Sitemap: https://YOUR-GITHUB-USERNAME.github.io/valentine-day/sitemap.xml

# NEW
Sitemap: https://john-doe.github.io/valentine-day/sitemap.xml
```

---

### 5. **_config.yml**

**Line 5**:
```yaml
# OLD
url: "https://YOUR-GITHUB-USERNAME.github.io"

# NEW
url: "https://john-doe.github.io"
```

**Line 11** (if you have Twitter):
```yaml
# OLD
username: YOUR-TWITTER-USERNAME

# NEW
username: john-does-twitter
```

**Line 16**:
```yaml
# OLD
- https://github.com/YOUR-GITHUB-USERNAME/valentine-day

# NEW
- https://github.com/john-doe/valentine-day
```

---

### 6. Other Documentation Files

Replace in these files wherever you see `YOUR-USERNAME` or `YOUR-GITHUB-USERNAME`:

- **SETUP_INSTRUCTIONS.md** - Multiple instances
- **CONTRIBUTING.md** - Multiple instances  
- **CUSTOMIZATION_GUIDE.md** - Multiple instances
- **.github/ISSUE_TEMPLATE/bug_report.md** - In examples
- **.github/ISSUE_TEMPLATE/feature_request.md** - In examples

---

## 🔍 How to Find and Replace (Easy Method)

### Using Text Editor (VS Code, Notepad++, Sublime):

1. **Open** the entire `valentine-day` folder
2. **Find & Replace All** (usually Ctrl+Shift+H)
3. **Find**: `YOUR-GITHUB-USERNAME`
4. **Replace**: `your-actual-username`
5. **Replace All**

### Using Command Line (Advanced):

```bash
# Navigate to your repository folder
cd valentine-day

# Find all files containing YOUR-GITHUB-USERNAME
grep -r "YOUR-GITHUB-USERNAME" .

# Replace all instances (Mac/Linux)
find . -type f -name "*.html" -o -name "*.md" -o -name "*.xml" | xargs sed -i 's/YOUR-GITHUB-USERNAME/john-doe/g'

# For Mac, use:
find . -type f \( -name "*.html" -o -name "*.md" -o -name "*.xml" \) -exec sed -i '' 's/YOUR-GITHUB-USERNAME/john-doe/g' {} +
```

---

## ✅ Verification Checklist

After replacing your username, verify:

- [ ] **index.html** - All meta tags updated
- [ ] **README.md** - Live demo link works
- [ ] **sitemap.xml** - URLs are correct
- [ ] **robots.txt** - Sitemap URL is correct
- [ ] **_config.yml** - Base URL is correct
- [ ] Test the live site URL in browser

---

## 🌐 Your Final URLs

After setup, your website will be accessible at:

**Main Site:**
```
https://YOUR-USERNAME.github.io/valentine-day/
```

**Direct Link:**
```
https://YOUR-USERNAME.github.io/valentine-day/index.html
```

**Repository:**
```
https://github.com/YOUR-USERNAME/valentine-day
```

---

## 📍 Where to Find Your GitHub Username

Not sure what your username is?

1. Go to [github.com](https://github.com)
2. Log in
3. Click your profile picture (top right)
4. Your username is shown at the top
5. Or check your profile URL: `github.com/YOUR-USERNAME`

---

## 💡 Important Notes

- **Case Sensitive**: Use exact case of your username
- **No Spaces**: GitHub usernames don't have spaces
- **Hyphens OK**: Usernames can have hyphens (-)
- **Numbers OK**: Usernames can have numbers

---

## 🆘 Need Help?

If you're stuck:

1. Double-check your GitHub username
2. Make sure repository name is exactly `valentine-day`
3. Verify repository is Public
4. Wait 5-10 minutes after changes
5. Clear browser cache
6. Check [GitHub Pages documentation](https://pages.github.com/)

---

## ✨ Quick Reference

**Username:** `____________________` (fill in)

**Live Site URL:** `https://_________.github.io/valentine-day/`

**Repository URL:** `https://github.com/_________/valentine-day`

---

**Once you've updated all files with your username, you're ready to deploy! 🚀**

Proceed to [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) for deployment steps.

**Good luck! 💕**