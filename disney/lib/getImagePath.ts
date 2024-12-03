export function getImagePath(
  imagePath: string | null | undefined,
  fullSize?: boolean
) {
  if (!imagePath) {
    return 'https://links.papareact.com/oBz'; // Fallback image
  }

  // Ensure no leading slashes in the image path
  const sanitizedPath = imagePath.startsWith('/')
    ? imagePath.slice(1)
    : imagePath;

  return `https://image.tmdb.org/t/p/${
    fullSize ? 'original' : 'w500'
  }/${sanitizedPath}`;
}
