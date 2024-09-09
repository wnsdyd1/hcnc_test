package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.PatientMapper;
import TeamB.service.PatientService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("patientService")
public class PatientServiceImpl extends EgovAbstractServiceImpl implements PatientService{
	@Resource(name = "patientMapper")
    private PatientMapper mapper;



}
