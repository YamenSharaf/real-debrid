export const API_BASE_URL = "https://api.real-debrid.com/rest/1.0";
export const GET_USER = `${API_BASE_URL}/user`;
export const GET_DOWNLOADS = `${API_BASE_URL}/downloads?limit=200`;
export const GET_TORRENTS = `${API_BASE_URL}/torrents?limit=200`;
export const ADD_TORRENT_FILE = `${API_BASE_URL}/torrents/addTorrent`;
export const GET_STATUS = (torrent_id: string) => `${API_BASE_URL}/torrents/info/${torrent_id}`;
export const SELECT_FILES = (torrent_id: string) => `${API_BASE_URL}/torrents/selectFiles/${torrent_id}`;
export const UNRESTRICT_LINK = `${API_BASE_URL}/unrestrict/link`;
export const UNRESTRICT_MAGNET = `${API_BASE_URL}/torrents/addMagnet`;
export const DELETE_TORRENT = (torrent_id: string) => `${API_BASE_URL}/torrents/delete/${torrent_id}`;
export const DELETE_DOWNLOAD = (download_id: string) => `${API_BASE_URL}/downloads/delete/${download_id}`;
