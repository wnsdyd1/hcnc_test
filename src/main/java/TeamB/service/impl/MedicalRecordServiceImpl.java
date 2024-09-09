package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.MedicalRecordMapper;
import TeamB.service.MedicalRecordService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("medicalRecordService")
public class MedicalRecordServiceImpl extends EgovAbstractServiceImpl implements MedicalRecordService{
	
	@Resource(name = "medicalRecordMapper")
    private MedicalRecordMapper mapper;

	

}
