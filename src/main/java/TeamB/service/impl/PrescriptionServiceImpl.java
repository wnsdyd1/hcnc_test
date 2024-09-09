package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.PrescriptionMapper;
import TeamB.service.PrescriptionService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("prescriptionService")
public class PrescriptionServiceImpl extends EgovAbstractServiceImpl implements PrescriptionService{
	@Resource(name = "prescriptionMapper")
    private PrescriptionMapper mapper;

	

}
