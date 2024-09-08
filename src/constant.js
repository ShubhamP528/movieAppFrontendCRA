export function generateRoomCode() {
  const length = 7;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    code += characters.charAt(randomIndex);
  }
  return code;
}

export function extractYouTubeVideoId(url) {
  // Regular expression to match YouTube video ID
  var regExp =
    /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

  // Extract video ID using match function
  var match = url.match(regExp);

  // Check if match is found and return video ID
  if (match && match[1]) {
    return match[1];
  } else {
    // Return null if no match is found
    return null;
  }
}
