# HTML Signature in Apple Mail (macOS)

### Step 1 — Prepare your HTML

Create a file called `signature.html` with your email signature code. Use inline CSS only. Open it in Safari, select all (`⌘ + A`), and copy (`⌘ + C`).

### Step 2 — Create a placeholder in Mail

Open **Mail → Settings → Signatures**.  
Select your account, click **+**, name it (e.g. “HTML”), type a placeholder like `replace me`, and close Mail.

### Step 3 — Find the generated file

In Finder, press `⌘ + Shift + G` and go to:

```
~/Library/Mail/V10/MailData/Signatures/
```

(The folder number may differ depending on macOS version.)  
Find the newest `.mailsignature` file — that’s your placeholder.

### Step 4 — Insert your HTML

Open the `.mailsignature` file in a plain text editor.  
Below the header lines (ending with `Content-Type: text/html;`), delete the placeholder and paste your HTML. Save and close.

### Step 5 — Lock the file

In Finder, select the `.mailsignature` file, press `⌘ + I`, and check **Locked**.  
This prevents Mail from overwriting it.

### Step 6 — Test it

Reopen Mail, start a new message, and choose your signature from the dropdown. It should now render your HTML correctly.

### Notes

- Use absolute URLs for hosted images (e.g. `https://domain.com/logo.png`).
- Inline images can be dragged in after it loads once.
- To edit again, unlock the file, make changes, save, and lock it again.
- Keep backups of both your `signature.html` and `.mailsignature` files.

**Tested on macOS Sonoma (Mail V10)**
