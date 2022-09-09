const getSpinner = () => {
  const spinner = document.createElement('div');
  spinner.className = "orbit-spinner"

  spinner.innerHTML = `
    <div style="position: fixed; display: flex; top: 50%; left: 50%; height: 10vh; width: 10vw; justify-content: center; align-items: center; ">
      <div class="orbit"></div>
      <div class="orbit"></div>
      <div class="orbit"></div>
    </div>
  `;

  return spinner;
}

export default getSpinner
