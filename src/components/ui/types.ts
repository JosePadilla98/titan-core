export interface MediaItem {
    src: any;
    alt?: string;
    type: 'image' | 'video';
    objectFit?: 'contain' | 'cover';
}
