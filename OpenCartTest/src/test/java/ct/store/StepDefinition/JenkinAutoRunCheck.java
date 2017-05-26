package ct.store.StepDefinition;

import java.text.SimpleDateFormat;
import java.util.Date;

public class JenkinAutoRunCheck {
	public String getCheckinTime(){
		String timeStamp = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());
		return timeStamp;
	}	
}
