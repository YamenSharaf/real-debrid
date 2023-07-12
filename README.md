# Real-Debrid Manager

Real-Debrid client for Raycast

[Real-Debrid](https://real-debrid.com) is a web service for downloading torrents remotely and unlocking some hoster links.

# Getting your token

You can obtain your token by going to [your account](https://real-debrid.com/apitoken). Pasting the key from there (**must be logged in**).

# Features

### Downloads

- View and search Downloads.
- Unrestrict hoster links for [supported hosters](https://real-debrid.com/compare).
- Add links from clipboard.
- Copy direct download links.
- Copy original hoster file links.
- Open media files with installed media players ([IINA](https://iina.io/)/ [VLC](https://www.videolan.org/vlc/download-macosx.html) recommended).
- Delete downloads.

### Torrents

- View and search Torrents.
- Add new torrent via magnet links.
- Add new torrent via torrent file upload.
- Add magnet links from clipboard.
- Select files for new torrents and reselect for existing torrents.
- View files and sizes in uploaded torrent.
- Send torrent files to Downloads.
- Delete torrents.

### Account Info

- View user account info and premium status.
- Display link hosters and remote upload quota along with remaining amount.

# Further development

Some ideas for further improvements:

- [ ] Support link containers upload (RSDF, CCF, CCF3, DLC).
- [ ] Change authentication method: The API token method is not recommended by RD because it can exposes potentially endpoints. None of these endpoints are used in this extension, but it's by far the easiest method to authenticate.
- [ ] Maybe adding a torrent search functionality that ties in nicely with the existing features. I like the idea of a complete workflow through Raycast.
