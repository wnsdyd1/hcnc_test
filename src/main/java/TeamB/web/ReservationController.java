package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.ReservationService;

@Controller
@RequestMapping(value="/reservation")
public class ReservationController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="reservationService")
	private ReservationService reservationService;
	
	// 예약 등록
	
	// 예약 수정
	
	// 예약 취소(삭제)
	
	// 예약 목록 조회 및 검색
	
	// 예약 알람

}
