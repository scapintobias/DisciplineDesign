# Email Signature Templates

This folder contains email signature templates for DisciplineDesign.

## Files

- `sofia.html` - Professional email signature for Sofia Righetti

## How to Add the Sofia.html Signature to Apple Mail on macOS

### Method 1: Direct HTML Import (Recommended)

This method preserves the custom styling and formatting of the signature.

#### Step 1: Prepare the Signature File

1. Open `sofia.html` in Safari (important: use Safari, not Chrome or Firefox)
2. The signature will display with proper formatting
3. Select all content using `Cmd + A`
4. Copy the content using `Cmd + C`

#### Step 2: Access Mail Preferences

1. Open Apple Mail
2. Go to **Mail** → **Preferences** (or **Settings** on macOS Ventura+)
3. Click on the **Signatures** tab

#### Step 3: Create New Signature

1. In the left column, select the email account where you want to add the signature
2. Click the **+** button below the middle column to create a new signature
3. Give your signature a name (e.g., "Sofia - DisciplineDesign")

#### Step 4: Add the Signature

1. In the signature editor on the right, delete any default text
2. Paste the copied signature using `Cmd + V`
3. The signature should appear with proper formatting, fonts, and colors

#### Step 5: Configure Signature Settings

1. Choose which signature to use for new messages in the dropdown at the bottom
2. Set "Choose Signature" to "Sofia - DisciplineDesign" if you want it as default
3. Close the Preferences window

### Method 2: Manual Recreation (Alternative)

If Method 1 doesn't preserve formatting correctly:

#### Step 1: Create Basic Signature

1. Follow steps 1-3 from Method 1
2. In the signature editor, manually type the signature content:

```
DisciplineDesign

Sofia Righetti | Designer

www.discipline.design
sofia@discipline.design
+39 346 7507187

[Add disclaimer text as needed]
```

#### Step 2: Format the Signature

1. Select "DisciplineDesign" and make it **bold**
2. Change the color to orange-red using Format → Show Colors
3. Select "Sofia Righetti" and make it **bold**
4. Select the website URL and add hyperlink: Format → Add Link
5. Select the email and add mailto link: Format → Add Link

### Troubleshooting

#### Common Issues and Solutions

**Fonts not displaying correctly:**

- Apple Mail may substitute fonts. The signature uses Inter font, which should fall back to system fonts gracefully.

**Colors not showing:**

- Ensure you're copying from Safari, not other browsers
- Try Method 2 and manually set colors using Mail's color picker

**Line spacing issues:**

- Manually adjust spacing by adding line breaks where needed
- Use Format → Show Ruler to adjust spacing

**Links not working:**

- Manually add links using Format → Add Link
- Ensure URLs include "https://" for web links and "mailto:" for email links

#### Testing Your Signature

1. Compose a new email to yourself
2. Check that the signature appears correctly
3. Send the test email and verify formatting in the received message
4. Test on different devices/email clients if needed

### Technical Notes

The `sofia.html` signature includes:

- **Custom font**: Inter (loaded from Google Fonts)
- **Brand colors**: Orange-red accents on black text
- **Professional layout**: Clean hierarchy with contact information
- **Legal disclaimer**: Italian privacy notice as required
- **Responsive design**: Adapts to different viewing contexts

### Maintenance

To update the signature:

1. Edit the `sofia.html` file as needed
2. Follow the installation steps again to update in Apple Mail
3. Test the updated signature before regular use

### Browser Compatibility Notes

When copying the signature:

- ✅ **Safari**: Best compatibility with Apple Mail
- ⚠️ **Chrome/Firefox**: May lose some formatting
- ⚠️ **Other browsers**: Not recommended for copying
