package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.DTO.TestDTO;
import TeamB.mappers.TestMapper;
import TeamB.service.TestService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("testService")
public class TestServiceImpl extends EgovAbstractServiceImpl implements TestService{
	@Resource(name = "testMapper")
    private TestMapper mapper;

	@Override
	public TestDTO test() {
		return mapper.test();
	}

}
