# 1:1 Framework Using Shared Agenda on Google Drive

This is a setup for shared 1:1 agenda that I started using with my teammates for our weekly 1:1s. It works by setting up a shared agenda document with each teammate on Google Drive, with e-mail notifications being sent whenever you or your teammate updates the document. Setting up the shared document is easy, but I did not find an out-of-the-box solution for sending e-mail notifications, so I had to develop this part myself.

Below are the steps you need to make to replicate this setup. Feel free to modify any document as you see fit.

1. Copy [this document](https://docs.google.com/document/d/1OCvc-NZV1sQ2_W34Dd7F44hkQS9nqE5_1dw7-5og6Ow/edit?usp=sharing) which is to be your shared agenda. Make one copy for each teammate and share the link with edit permissions.
2. Copy [this spreadsheet](https://docs.google.com/spreadsheets/d/1JrOITXv1_j32nj7HEm1lf8CtX-PBuHhVCYWvmSLantc/edit?usp=sharing). You don't need to share this spreadsheet with anyone - it is used only as a "database" of documents that are being monitored.
3. Update spreadsheet from step 2. For each document from step 1, add the document name, the comma-separated list of e-mails to send enotifications to, and the content of the e-mail body which could be the share link of the 1:1 document.
3. With the spreadsheet open, click Tools / Script Editor and paste the content from the `notify.gs` file.
4. Click the title of the project and name it e.g. `Notify on Change`. This will save the project to [your developer hub](https://script.google.com/).
5. Go to [your developer hub](https://script.google.com/) and find your project. Click the 3-dot menu next to your project name and select Triggers.
6. Click Add Trigger. Use the following settings. This will check for modifications every hour and invoke `notifyOnChangedFiles` whenever a document that starts with "1:1 Agenda" is updated.

    * Function to run: notifyOnChangedFiles
    * Event source: time-driven
    * Trigger type: hour trigger
    * Hour interval: every hour
 
