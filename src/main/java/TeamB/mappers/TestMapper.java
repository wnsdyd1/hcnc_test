package TeamB.mappers;

import TeamB.DTO.TestDTO;
import egovframework.rte.psl.dataaccess.mapper.Mapper;

@Mapper("testMapper")
public interface TestMapper {
	
	TestDTO test();

}
