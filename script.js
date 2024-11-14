function toggleExpand(boxId) {
    const box = document.getElementById(boxId);
    const options = box.querySelector('.options');
    
    if (box.classList.contains('expanded')) {
      box.classList.remove('expanded');
      options.style.display = 'none';
    } else {
      // Close any currently expanded box
      document.querySelectorAll('.box').forEach(b => {
        b.classList.remove('expanded');
        b.querySelector('.options').style.display = 'none';
      });
      // Expand the clicked box
      box.classList.add('expanded');
      options.style.display = 'block';
    }
  }
  