package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.NoticeService;

//공지사항 컨트롤러
@Controller
@RequestMapping(value="/notice")
public class NoticeController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="noticeService")
	private NoticeService noticeService;
	
	
	//공지사항 작성
	
	//공지사항 수정
	
	//공지사항 삭제
	
	//공지사항 상세보기
	
	//공지사항 목록조회
	
	
	
	
	
	
	
	

}
