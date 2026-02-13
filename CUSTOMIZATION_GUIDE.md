# 🎨 Complete Customization Guide

This guide will help you personalize every aspect of your Valentine's Day love letter website!

---

## 📸 Part 1: Adding Your Photos

### Method 1: Using Imgur (Easiest)

1. **Upload to Imgur**
   - Go to [imgur.com](https://imgur.com)
   - Click "New post"
   - Upload your 4 favorite photos
   - Click on each image → Right click → "Copy image address"

2. **Add to Website**
   - Open `index.html` in a text editor
   - Find "Our Memories" section (around line 300)
   - Replace placeholder URLs:
   
   ```html
   <!-- Memory 1 -->
   <img class="polaroid-image" src="https://i.imgur.com/YOUR-IMAGE-ID.jpg" alt="Memory 1">
   
   <!-- Memory 2 -->
   <img class="polaroid-image" src="https://i.imgur.com/YOUR-IMAGE-ID.jpg" alt="Memory 2">
   
   <!-- Memory 3 -->
   <img class="polaroid-image" src="https://i.imgur.com/YOUR-IMAGE-ID.jpg" alt="Memory 3">
   
   <!-- Memory 4 -->
   <img class="polaroid-image" src="https://i.imgur.com/YOUR-IMAGE-ID.jpg" alt="Memory 4">
   ```

### Method 2: Using GitHub Repository

1. **Create images folder**
   - In your GitHub repository, create a folder called `images`
   
2. **Upload images**
   - Click "Add file" → "Upload files"
   - Upload your 4 photos (rename them: photo1.jpg, photo2.jpg, etc.)
   - Commit the changes

3. **Update URLs**
   ```html
   <img class="polaroid-image" src="./images/photo1.jpg" alt="Memory 1">
   <img class="polaroid-image" src="./images/photo2.jpg" alt="Memory 2">
   <img class="polaroid-image" src="./images/photo3.jpg" alt="Memory 3">
   <img class="polaroid-image" src="./images/photo4.jpg" alt="Memory 4">
   ```

### Customize Photo Captions

Find and edit these lines:
```html
<div class="polaroid-caption">First Memory ✨</div>
<div class="polaroid-caption">Second Memory 💕</div>
<div class="polaroid-caption">Third Memory 🌟</div>
<div class="polaroid-caption">Fourth Memory 💖</div>
```

Change to:
```html
<div class="polaroid-caption">Our First Date 💕</div>
<div class="polaroid-caption">Beach Vacation 🌊</div>
<div class="polaroid-caption">Anniversary Dinner 🍷</div>
<div class="polaroid-caption">Proposal Moment 💍</div>
```

---

## 💌 Part 2: Personalizing the Love Letter

### Change the Name

**Landing Page (Page 1):**
```html
<!-- Find this line around line 200 -->
<h1>Hey Manish!</h1>

<!-- Change to: -->
<h1>Hey [Your Love's Name]!</h1>
```

**Love Letter (Page 4):**
```html
<!-- Find around line 350 -->
<p>Dear Manish,</p>

<!-- Change to: -->
<p>Dear [Your Love's Name],</p>
```

### Customize Letter Content

Find the letter section and edit:

```html
<div class="letter-content">
    <p>Dear [Name],</p>
    
    <p>
        Every moment with you feels like a dream come true. 
        You have this incredible way of making even the ordinary 
        feel extraordinary. Your smile lights up my world, and 
        your laughter is my favorite sound.
    </p>
    
    <p>
        I want you to know that you are loved beyond measure. 
        You are my comfort in chaos, my joy in sadness, and my 
        hope in uncertainty. Thank you for being you, and thank 
        you for choosing me.
    </p>
    
    <p>
        Here's to us, to our memories, and to all the beautiful 
        moments yet to come.
    </p>
    
    <div class="letter-signature">Forever yours 💚</div>
</div>
```

**Tips for Writing:**
- Keep it heartfelt and genuine
- Mention specific memories or inside jokes
- Use 3-5 paragraphs for good flow
- End with a romantic signature

---

## 💕 Part 3: "Why I Love You" Section

### Edit the 5 Reasons

Find and customize each reason:

```html
<!-- Reason 1 -->
<div class="reason-item">
    <div class="reason-number">1</div>
    <div class="reason-text">
        <div class="reason-title">Your Kindness</div>
        <div class="reason-description">
            The way you care for everyone around you shows me 
            the beauty of your heart every single day.
        </div>
    </div>
</div>
```

**Example Customizations:**

```html
<!-- Reason 1: Humor -->
<div class="reason-title">Your Sense of Humor</div>
<div class="reason-description">
    You make me laugh until my stomach hurts, even on my 
    worst days. Life with you is an adventure filled with joy.
</div>

<!-- Reason 2: Support -->
<div class="reason-title">Your Unwavering Support</div>
<div class="reason-description">
    You believe in my dreams even when I doubt myself. With 
    you by my side, I feel like I can conquer the world.
</div>

<!-- Reason 3: Understanding -->
<div class="reason-title">How You Understand Me</div>
<div class="reason-description">
    You know what I'm thinking before I say it. You see the 
    real me and love me anyway. That's magic.
</div>

<!-- Reason 4: Adventures -->
<div class="reason-title">Our Adventures Together</div>
<div class="reason-description">
    From spontaneous road trips to quiet movie nights, every 
    moment with you is an adventure I cherish.
</div>

<!-- Reason 5: Simply You -->
<div class="reason-title">Just Being You</div>
<div class="reason-description">
    I love you for a million little reasons that can't be put 
    into words. You are my home, my heart, my everything.
</div>
```

---

## 🎨 Part 4: Changing Colors

### Main Color Scheme

Find the CSS section and locate these gradients:

**Background Gradient:**
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

**Popular Color Schemes:**

```css
/* Romantic Red & Pink */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* Soft Pastel */
background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);

/* Ocean Blue */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* Sunset Orange */
background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);

/* Royal Purple */
background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);

/* Deep Romance */
background: linear-gradient(135deg, #d53369 0%, #daae51 100%);
```

### Button Colors

```css
.btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

/* Change to match your theme */
.btn {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}
```

### Envelope Colors

```css
.envelope-back {
    background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
}

.envelope-flap {
    background: linear-gradient(135deg, #fda085 0%, #f6d365 100%);
}
```

---

## ✨ Part 5: Advanced Customizations

### Add Your Own Fonts

1. **Choose a font** from [Google Fonts](https://fonts.google.com)
2. **Add to HTML** (in `<head>` section):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
   ```

3. **Apply in CSS**:
   ```css
   body {
       font-family: 'Roboto', sans-serif;
   }
   
   h1 {
       font-family: 'Pacifico', cursive;
   }
   ```

### Change Floating Hearts

Find this array in JavaScript:
```javascript
const hearts = ['💚', '💕', '💖', '💗', '💝', '❤️'];
```

Change to:
```javascript
const hearts = ['❤️', '🌹', '💍', '💑', '💐', '✨'];
// Or use your preferred emojis!
```

### Adjust Animation Speed

```css
/* Slower animations */
.polaroid {
    transition: all 0.8s ease; /* was 0.4s */
}

/* Faster envelope opening */
.envelope-flap {
    transition: transform 0.4s ease; /* was 0.6s */
}
```

### Add Background Music (Advanced)

1. **Get a romantic song** (make sure you have rights to use it)
2. **Add to HTML** (before closing `</body>`):
   ```html
   <audio id="bgMusic" loop>
       <source src="./music/romantic-song.mp3" type="audio/mpeg">
   </audio>
   
   <button onclick="toggleMusic()" style="position: fixed; bottom: 20px; right: 20px; z-index: 10000;">
       🎵
   </button>
   
   <script>
   function toggleMusic() {
       const music = document.getElementById('bgMusic');
       if (music.paused) {
           music.play();
       } else {
           music.pause();
       }
   }
   </script>
   ```

---

## 📱 Part 6: Mobile Optimization

The site is already mobile-responsive, but you can adjust:

```css
@media (max-width: 768px) {
    /* Make text larger on mobile */
    .message {
        font-size: 1.2em; /* was 1.1em */
    }
    
    /* Adjust polaroid size */
    .polaroid-grid {
        gap: 30px; /* was 40px */
    }
}
```

---

## 🎯 Part 7: SEO & Metadata

### Update Page Title

```html
<title>To [Name] - My Valentine's Love Letter 💕</title>
```

### Update Meta Description

```html
<meta name="description" content="A special Valentine's Day message for [Name] - the love of my life. Happy Valentine's Day 2026!">
```

### Update Open Graph Image

Create a preview image (1200x630px) and update:
```html
<meta property="og:image" content="https://manis-sharma.github.io/valentine-day/preview.png">
```

---

## 🐛 Testing Your Changes

1. **Save** your `index.html` file
2. **Open** in browser (double-click the file)
3. **Test** on different screen sizes:
   - Desktop: F12 → Toggle device toolbar
   - Test on: iPhone, iPad, Desktop
4. **Check** all animations work
5. **Verify** all images load
6. **Read through** all content for typos

---

## 📤 Deploying Changes

### To GitHub:
```bash
git add .
git commit -m "Personalized for [Name]"
git push origin main
```

Wait 2-5 minutes for changes to appear on your live site!

---

## 💡 Quick Tips

- **Backup**: Keep a copy of the original before major changes
- **Test**: Always test locally before pushing to GitHub
- **Mobile First**: Check how it looks on mobile
- **Ask for Help**: Open an issue if you're stuck
- **Have Fun**: This is a labor of love!

---

## 🎉 You're Ready!

Your personalized Valentine's Day love letter is ready to melt hearts! 💕

Need more help? Check out:
- [SETUP_INSTRUCTIONS.md](SETUP_INSTRUCTIONS.md) for deployment help
- [GitHub Issues](https://github.com/YOUR-USERNAME/valentine-day/issues) for support
- [README.md](README.md) for overview

**Happy Customizing! 💖**