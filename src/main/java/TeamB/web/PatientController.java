package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.PatientService;

@Controller
@RequestMapping(value="/patient")
public class PatientController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="patientService")
	private PatientService patientService;
	
	// 환자 정보 등록
	
	// 환자 정보 수정
	
	// 환자 정보 삭제
	
	// 환자 목록 조회 및 검색
	
	// 환자 진료 기록 관리
	
	

}
