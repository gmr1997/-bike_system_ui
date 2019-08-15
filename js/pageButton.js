function showNavigate(panel, pageInfo, fun) {
	//移除容器中所有的分页按钮
	panel.find("li").remove();

	//获得最后一页的页数
	var lastPage = pageInfo.navigateLastPage;
	
	//如果最后一页的页数大于0，则显示分页按钮
	if (lastPage > 0) {
		//获取所有分页按钮
		var pageButtonList = pageInfo.navigatepageNums;
		
		//添加上一页按钮
		panel.append(
			'<li class="paginate_button page-item previous" id="dataTable_previous"><a href="#" id="prePage" aria-controls="dataTable" data-dt-idx="0" tabindex="0" class="page-link">上一页</a></li>'
		);

		//添加所有分页按钮
		for (var i = 0; i < pageButtonList.length; i++) {
			panel.append(
				'<li class="paginate_button page-item previous" data="'+ pageButtonList[i] +'"><a href="'+pageButtonList[i]+'" aria-controls="dataTable" data-dt-idx="2" tabindex="0" class="page-link">' +
				pageButtonList[i] + '</a></li>');
		}
		
		//添加下一页按钮
		panel.append(
			'<li class="paginate_button page-item next" id="dataTable_next"><a href="#" id="nextPage" aria-controls="dataTable" data-dt-idx="7" tabindex="0" class="page-link">下一页</a></li>'
		);
		
		//如果当前页为第一页，则上一页按钮无效
		if(pageInfo.isFirstPage){
			$("#dataTable_previous").prop('class', 'paginate_button page-item previous disabled');
		}else{
			$("#dataTable_previous").attr('data', pageInfo.prePage);
		}
		
		//如果当前页为最后一页，则下一页按钮无效
		if(pageInfo.isLastPage){
			$("#dataTable_next").prop('class', 'paginate_button page-item next disabled');
		}else{
			$("#dataTable_next").attr('data', pageInfo.nextPage);
		}
		
		//为分页按钮绑定单击事件
		$(".paginate_button").on("click", function() {
			//获得被点击超链接的href属性的值
			var pageNum = $(this).attr("data");
			//调用方法
			fun(pageNum);
			return false;
		});
		
	}

}
