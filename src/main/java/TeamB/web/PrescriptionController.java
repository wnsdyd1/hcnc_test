package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.PrescriptionService;

//처방전 컨트롤러
@Controller
@RequestMapping(value="/prescription")
public class PrescriptionController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="prescriptionService")
	private PrescriptionService prescriptionService;
	
	//처방전 작성
	
	//처방전 수정
	
	//처방전 삭제
	
	//처방전 상세보기
	
	//처방전 목록조회
	
	
	
	
	
	
	
	

}
