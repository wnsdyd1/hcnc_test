package TeamB.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import TeamB.mappers.UserMapper;
import TeamB.service.UserService;
import egovframework.rte.fdl.cmmn.EgovAbstractServiceImpl;

@Service("userService")
public class UserServiceImpl extends EgovAbstractServiceImpl implements UserService{
	@Resource(name = "userMapper")
    private UserMapper mapper;




}
