function showDescription(event, productName, description) {
    event.preventDefault();
    
    document.getElementById('descTitle').textContent = productName;
    document.getElementById('descText').textContent = description;
    document.getElementById('descriptionContent').style.display = 'block';
    
    // Scroll to description
    document.getElementById('description').scrollIntoView({ behavior: 'smooth' });
}

function closeDescription() {
    document.getElementById('descriptionContent').style.display = 'none';
}
