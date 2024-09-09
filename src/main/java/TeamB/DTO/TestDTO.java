package TeamB.DTO;

public class TestDTO {
	
	private int department_id;
	private String department;
	
	public int getDepartment_id() {
		return department_id;
	}
	public void setDepartment_id(int department_id) {
		this.department_id = department_id;
	}
	public String getDepartment() {
		return department;
	}
	@Override
	public String toString() {
		return "UserDTO [department_id=" + department_id + ", department=" + department + "]";
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	

}
