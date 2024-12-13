function previewImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = reader.result;
        imagePreview.style.display = 'block';

        document.getElementById('changeImageBtn').style.display = 'block';
    };

    if (file) {
        reader.readAsDataURL(file);
    }
}

function resetImage() {
    const imagePreview = document.getElementById('imagePreview');
    imagePreview.src = "";
    imagePreview.style.display = 'none';
    document.getElementById('fileInput').value = "";
    document.getElementById('changeImageBtn').style.display = 'none';
}
