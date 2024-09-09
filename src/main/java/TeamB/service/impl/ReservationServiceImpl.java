package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.ReservationMapper;
import TeamB.service.ReservationService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("reservationService")
public class ReservationServiceImpl extends EgovAbstractServiceImpl implements ReservationService{
	@Resource(name = "reservationMapper")
    private ReservationMapper mapper;


}
