package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.MedicalRecordService;

//진료기록 컨트롤러
@Controller
@RequestMapping(value="/medicalRecord")
public class MedicalRecordController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="medicalRecordService")
	private MedicalRecordService medicalRecordService;
	
	//진료기록 작성
	
	//진료기록 수정
	
	//진료기록 삭제
	
	//진료기록 상세보기

	//진료기록 목록 조회

	
	
	
	
	
	
	
	

}
