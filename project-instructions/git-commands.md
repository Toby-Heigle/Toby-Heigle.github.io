# **Saving Your Code to GitHub**

When working on coding projects, it's important to save and track your changes using **Git**. Follow these three commands in your terminal to save your work and upload it to GitHub.

---

## **1️⃣ Stage Your Changes**

Run the following command to tell Git which files to track:

```bash
git add .
```

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📌 What does this do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
  
  - Finds and saves all files you've changed.  
  - Stages the files so that Git knows you want to include them in your next update.  
    </td>
  </tr>
</table>

---

## **2️⃣ Commit Your Changes**

After staging, commit your changes with a descriptive message. Type this command yourself so you can customize the message at the end of the command.

```bash
git commit -m "worked on <project_name>"
```

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📌 What does this do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">

- Names and saves the changes you've made in a <b>checkpoint</b>.
- The message inside **quotes** helps you keep track of what was updated.
- Example: <code>git commit -m "fixed bug in movement function"</code>.
    </td>

  </tr>

</table>

---

## **3️⃣ Push Your Code to GitHub**

Finally, upload your changes to GitHub using:

```bash
git push
```

<table style="width: 80%; margin: auto; border-collapse: collapse; margin-top: 15px; background-color: #2c2c2c; border: 1px solid #444; border-radius: 8px; overflow: hidden;">
  <tr>
    <th style="text-align: left; padding: 10px; background-color: #444; color: #e2e2e2; border-bottom: 1px solid #666;">
      📌 What does this do?
    </th>
  </tr>
  <tr>
    <td style="padding: 10px; color: #e2e2e2;">
  
  - Sends your saved work to **GitHub**, where it can be accessed, shared, and backed up.
  - Your changes are now visible on your GitHub repository.  
    </td>
  </tr>
</table>

---

## **🔁 Summary of Commands**

Use these commands every time you want to save your work to GitHub:

```bash
git add .
git commit -m "describe your changes"
git push
```

Now your code is safely stored on GitHub! 🎉
