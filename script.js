document.querySelector('.start-button').addEventListener('click', function() {
    alert('开始菜单被点击了！');
    // 这里可以添加更多逻辑来展开开始菜单
  });
  
  document.querySelector('.close-button').addEventListener('click', function() {
    var windowElement = this.closest('.window'); // 找到最近的窗口元素
    windowElement.style.display = 'none'; // 隐藏窗口
  });