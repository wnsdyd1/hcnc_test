package TeamB.web;

import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Controller;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nexacro.uiadapter17.spring.core.annotation.ParamDataSet;
import com.nexacro.uiadapter17.spring.core.data.NexacroResult;

import TeamB.DTO.TestDTO;
import TeamB.service.TestService;

@Controller
@RequestMapping(value="/test")
public class TestController {
	
	@Resource(name="txManager")
	PlatformTransactionManager transationManager;
	
	@Resource(name="testService")
	private TestService testService;
	
	@RequestMapping(value="/test.do")
	public String test(Model model) {
		System.out.println("###################");
		TestDTO dto = testService.test();
		model.addAttribute("dto", dto);
		return "/first";
	}
	
	@RequestMapping(value = "/testNexa.do")
    public NexacroResult testNexa(@ParamDataSet(name = "test", required = false) Map<String,Object> param) {
    	NexacroResult result = new NexacroResult();
    	try {
    		
    		TestDTO test = testService.test();
    		result.addDataSet("test", test);
    		
    	}catch(Exception ee) {
    		System.out.println(ee);
    		result.setErrorCode(-1);
    		result.setErrorMsg("catch 조회 오류");
    	}
    	return result;
    }
	
	

}
