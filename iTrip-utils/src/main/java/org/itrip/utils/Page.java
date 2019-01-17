package org.itrip.utils;

import lombok.Data;

/**
 * 分页
 * @author A556U
 *
 */

@Data
public class Page {
	private int currentPageNo=1;//当前页
	private int pageSize=2;//每页显示数据量
	private int totalCount;//总记录数
	private int totalPageCount;//总页数
	private int jumpPageIndex;//跳转到某页
	
	public void setCurrentPageNo(int currentPageNo) {
		if(currentPageNo>=0){
			//总页数
			this.currentPageNo=currentPageNo;
		}else {
			currentPageNo=0;
		}
		
	}
	public void setTotalPageCount(int totalPageCount) {
		if(totalPageCount>0){
			//总页数
			totalPageCount=this.totalCount%pageSize==0?(this.totalCount/pageSize):(this.totalCount/pageSize+1);
			this.totalPageCount = totalPageCount;
		}
		
	}

}
