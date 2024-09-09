package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.NoticeMapper;
import TeamB.service.NoticeService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("noticeService")
public class NoticeServiceImpl extends EgovAbstractServiceImpl implements NoticeService{
	
	@Resource(name = "noticeMapper")
    private NoticeMapper mapper;

	
}
