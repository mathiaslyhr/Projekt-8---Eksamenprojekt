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

document.querySelectorAll('.editable').forEach(function (element) {
    element.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            saveText(element);
            element.blur();
        }

        if (element.textContent.length > 20) {
            element.textContent = element.textContent.slice(0, 20);
        }
    });
});

function saveText(element) {
    const newText = element.textContent;
    console.log("Gemmer tekst:", newText);
}
