package TeamB.web;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.web.bind.annotation.RequestMapping;

import TeamB.service.UserService;

@Controller
@RequestMapping(value="/user")
public class UserController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="userService")
	private UserService userService;

	
	// 회원가입
	
	// 로그인
	
	// 로그아웃
	
	// 회원 정보 수정
	
	// 회원 탈퇴
	
	

}
