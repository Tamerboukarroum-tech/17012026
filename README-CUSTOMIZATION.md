# Your Digital Love Story Website 💕

## Overview
This is your personal digital love story website with chapters, images, audio players, and beautiful typography - just like the screenshots you shared!

## 🎨 Current Setup

The website includes:
- **Hero Section**: Date, main title, subtitle, and a song player
- **Author's Note**: With image and voice note player
- **Prologue**: With two images side by side
- **Chapters**: Multiple chapters with images and story text
- **Footer**: Branding and closing message

## 📝 How to Customize Your Story

### 1. Change Text Content

Open `app/page.tsx` and edit:

- **Date**: Line 64 - Change `28/06/2020` to your date
- **Main Title**: Line 65 - Change `Our Forever Love Story`
- **Subtitle**: Line 66 - Change `For Him, By Her`
- **Chapter Titles**: Lines 114, 136, 158 - Change chapter titles
- **Chapter Subtitles**: Lines 115, 137, 159 - Change chapter subtitles
- **Story Text**: Lines 124-134, 146-156, 168-173 - Replace with your story

### 2. Replace Images

Add your images to `public/images/` folder. Supported formats: JPG, PNG, GIF

**Required Images:**
- `authors-note.jpg` - Your author's note image
- `prologue-1.jpg` - First prologue image
- `prologue-2.jpg` - Second prologue image
- `chapter1.jpg` - Chapter 1 image
- `chapter2.jpg` - Chapter 2 image
- `chapter3.jpg` - Chapter 3 image

**Tips:**
- Use high-quality images (at least 1200px wide)
- Keep file sizes reasonable (under 2MB each)
- Rename your images to match the names above, OR update the image paths in `page.tsx`

### 3. Add Audio Files

Add your audio files to `public/audio/` folder. Supported formats: MP3, WAV

**Required Audio:**
- `song.mp3` - Your main song for the hero section
- Add more audio files and update the `src` in the AudioPlayer components

### 4. Add More Chapters

To add a new chapter, copy this section in `app/page.tsx`:

```tsx
{/* Chapter 4 */}
<section className="content-section">
  <h2 className="chapter-title">Chapter 4</h2>
  <h3 className="section-subtitle">Your Chapter Title</h3>
  
  <div className="image-container large">
    <img src="/images/chapter4.jpg" alt="Chapter 4" />
  </div>

  <div className="text-content">
    <p>
      Your story text here...
    </p>
  </div>
</section>
```

Add as many chapters as you want!

### 5. Customize Colors & Fonts

Open `app/globals.css` to customize:

- **Background Color**: Line 4 - `--background: #000000;`
- **Text Color**: Line 5 - `--foreground: #ffffff;`
- **Font**: Line 19 - Change `'Georgia', 'Times New Roman', serif`

### 6. Add Voice Notes

To add a voice note to any section:

```tsx
<div className="voice-note">
  <AudioPlayer title="Voice Note" duration="0:15" />
</div>
```

Update the audio source in the AudioPlayer component.

## 🚀 Running Your Website

1. Install dependencies (first time only):
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📱 Responsive Design

The website automatically adjusts for:
- Desktop computers
- Tablets
- Mobile phones

## 🎯 Quick Customization Checklist

- [ ] Update the date in hero section
- [ ] Change main title and subtitle
- [ ] Replace all placeholder images
- [ ] Add your audio files
- [ ] Update chapter titles
- [ ] Write your story text for each chapter
- [ ] Add more chapters if needed
- [ ] Customize the "Ossotna" brand name to yours
- [ ] Update footer text

## 📂 File Structure

```
ossotna-clone/
├── app/
│   ├── page.tsx         # Main story page (EDIT THIS)
│   ├── globals.css      # Styles (EDIT THIS)
│   └── layout.tsx       # App layout
├── public/
│   ├── images/          # Put your images here
│   │   ├── authors-note.jpg
│   │   ├── prologue-1.jpg
│   │   ├── prologue-2.jpg
│   │   ├── chapter1.jpg
│   │   ├── chapter2.jpg
│   │   └── chapter3.jpg
│   └── audio/           # Put your audio files here
│       └── song.mp3
└── README-CUSTOMIZATION.md  # This file!
```

## 💡 Tips

1. **Image Optimization**: Use tools like TinyPNG to compress images before uploading
2. **Audio**: Keep audio files under 5MB for faster loading
3. **Text**: Write your story in a text editor first, then paste it in
4. **Preview**: Always preview changes in the browser before finalizing
5. **Backup**: Keep copies of your original images and audio files

## 🎨 Design Notes

The design features:
- Elegant serif fonts (Georgia)
- Full-screen hero section
- Smooth scrolling between sections
- Custom audio players
- Responsive image grids
- Centered text for emphasis
- Clean, minimal black & white aesthetic

## 🆘 Need Help?

Common issues:
- **Images not showing**: Make sure files are in `public/images/` and names match exactly
- **Audio not playing**: Check file format (MP3 works best) and path
- **Layout broken**: Make sure you didn't accidentally delete closing tags (`</div>`, `</section>`)

---

**Enjoy creating your beautiful love story! ❤️**
