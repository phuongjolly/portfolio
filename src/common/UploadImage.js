export async function readFile(file, setUrl) {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    setUrl(reader.result);
  };
}
