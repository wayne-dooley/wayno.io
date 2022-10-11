
function SetImageGotFocus(oElement, oPreviousItem, sSelectedItem)
{
	var oSrcElement
	
	if(oPreviousItem == "[object]")
		SetImageLostFocus(oPreviousItem, sSelectedItem);

	if(oElement.name != sSelectedItem)
		oElement.src = ImageName(oElement.name, "focus");
}

function SetImageLostFocus(oPreviousItem, sSelectedItem)
{
	if(oPreviousItem.name != sSelectedItem)
		oPreviousItem.src = ImageName(oPreviousItem.name, "unselect");
}

function SetImageSource(sElementID, sSelectItem)
{
	if(sElementID != sSelectItem)
		return ImageName(sElementID, "unselect");
	else
		return ImageName(sElementID, "select");
}

function ImageName(sElementID, sAction)
{
	var sName;
	var sAppRoot = Application("Root");
	
	sName = sElementID.substring(3, sElementID.length)
	if(sAction == "focus")
		return sAppRoot + "/Images/Home/" + "Focus" + sName + ".gif"
	else {
		if(sAction == "unselect")
			return  sAppRoot + "/Images/Home/" + "Unsel" + sName + ".gif"
		else
			return  sAppRoot + "/Images/Home/" + "Sel" + sName + ".gif"
	}
}

function ChangeImage(sImage)
{

	var doc = window.top.frames[1].document		//EmployeePortalFrameLeft
	var sType

	if (sImage == "Home")
	{
		//This is here to prevent the first time load of this page from causing a script 
		//error due to the upper frame not being loaded completely
		sType = typeof(doc.imgHome)
		if (sType != "undefined")
		{		
			doc.imgBenefits.src = "images/side/sideempben.gif"
			doc.imgMaps.src = "images/side/sideempmap.gif"
			doc.imgManuals.src = "images/side/sideempman.gif"  
			doc.imgJobs.src = "images/side/sideempcar.gif"
			doc.imgHome.src = "images/side/sideemphome2.gif"
		}
	}	
	else if (sImage == "Benefits")
	{
			doc.imgBenefits.src = "images/side/sideempben2.gif"
			doc.imgMaps.src = "images/side/sideempmap.gif"
			doc.imgManuals.src = "images/side/sideempman.gif"  
			doc.imgJobs.src = "images/side/sideempcar.gif"  
			doc.imgHome.src = "images/side/sideemphome.gif"
	}
	else if (sImage == "Maps")
	{
		doc.imgBenefits.src = "images/side/sideempben.gif"
		doc.imgMaps.src = "images/side/sideempmap2.gif"
		doc.imgManuals.src = "images/side/sideempman.gif"  
		doc.imgJobs.src = "images/side/sideempcar.gif"  
		doc.imgHome.src = "images/side/sideemphome.gif"
	}
	else if (sImage == "Manuals")
	{
		doc.imgBenefits.src = "images/side/sideempben.gif"
		doc.imgMaps.src = "images/side/sideempmap.gif"
		doc.imgManuals.src = "images/side/sideempman2.gif"  
		doc.imgJobs.src = "images/side/sideempcar.gif"  
		doc.imgHome.src = "images/side/sideemphome.gif"
	}
	else if (sImage == "Jobs")
	{
		doc.imgBenefits.src = "images/side/sideempben.gif"
		doc.imgMaps.src = "images/side/sideempmap.gif"
		doc.imgManuals.src = "images/side/sideempman.gif"  
		doc.imgJobs.src = "images/side/sideempcar2.gif"
		doc.imgHome.src = "images/side/sideemphome.gif"
	}	
}

function ChangeCitImage(sImage)
{
	var doc = window.top.frames[1].document		//EmployeePortalFrameLeft
	var sType

	if (sImage == "GovBodies")
	{
		//This is here to prevent the first time load of this page from causing a script 
		//error due to the upper frame not being loaded completely
		sType = typeof(doc.imgGovBodies)
		if (sType != "undefined")
		{		
			doc.imgGovBodies.src = "images/side/sidecithome2.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"
		}
	}	
	else if (sImage == "Career")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer2.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"	
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"					
	}
	else if (sImage == "News")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews2.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}
	else if (sImage == "WellBeing")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell2.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}
	else if (sImage == "Inquiry")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry2.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}
	else if (sImage == "Entertainment")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter2.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}	
	else if (sImage == "Museum")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum2.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}	
	else if (sImage == "Travel")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel2.gif"
			doc.imgParks.src = "images/side/sidecitparks.gif"			
	}	
	else if (sImage == "Parks")
	{
			doc.imgGovBodies.src = "images/side/sidecithome.gif"
			doc.imgCareer.src = "images/side/sidecitcareer.gif"
			doc.imgNews.src = "images/side/sidecitnews.gif"  
			doc.imgWellBeing.src = "images/side/sidecitwell.gif"
			doc.imgInquiry.src = "images/side/sidecitinquiry.gif"
			doc.imgEnter.src = "images/side/sidecitenter.gif"
			doc.imgMuseum.src = "images/side/sidecitmuseum.gif"
			doc.imgTravel.src = "images/side/sidecittravel.gif"
			doc.imgParks.src = "images/side/sidecitparks2.gif"			
	}						
}

function ChangeBusinessImages(sImage)
{
	var doc = window.top.frames[1].document		//EmployeePortalFrameLeft
	var sType

	if (sImage == "Home")
	{
		//This is here to prevent the first time load of this page from causing a script 
		//error due to the upper frame not being loaded completely
		sType = typeof(doc.imgHome)
		if (sType != "undefined")
		{		
			doc.imgHome.src = "images/side/sidebushome2.gif"
			doc.imgService.src = "images/side/sidebusgov.gif"
			doc.imgResource.src = "images/side/sidebusother.gif"  
		}
	}	
	else if (sImage == "Services")
	{
		doc.imgHome.src = "images/side/sidebushome.gif"
		doc.imgService.src = "images/side/sidebusgov2.gif"
		doc.imgResource.src = "images/side/sidebusother.gif" 
	}
	else if (sImage == "Resource")
	{
		doc.imgHome.src = "images/side/sidebushome.gif"
		doc.imgService.src = "images/side/sidebusgov.gif"
		doc.imgResource.src = "images/side/sidebusother2.gif"  
	}
}

function ChangeHeaderImage(sImage, bMain, sPath)
{
	var doc = document.forms[0]
		
	if (sImage == "Home")
		doc.imgHome.src = sPath + "images/header/home.gif"
	else
		doc.imgHome.src = sPath + "images/header/home2.gif"
	
	if (sImage == "Citizen")
		doc.imgCitizen.src = sPath + "images/header/citizen.gif"
	else
		doc.imgCitizen.src = sPath + "images/header/citizen2.gif"
	
	if (sImage == "Business")
		doc.imgBusiness.src = sPath + "images/header/business.gif"
	else
		doc.imgBusiness.src = sPath + "images/header/business2.gif"
	
	if (sImage == "Employee")
		doc.imgEmployee.src = sPath + "images/header/employee.gif"
	else
		doc.imgEmployee.src = sPath + "images/header/employee2.gif"
	
	if (bMain == true)
	{
		doc.imgPicture.src = "images/side/pic" + sImage + ".jpg"
		doc.imgStatement.src = "images/side/fill" + sImage + ".gif"
	}
		
}

function GetCurrentDate()
{
	var d, s, m
	d = new Date()
		
	s = d.getDay() 
		
	if (s == 0)
	{ 
		s = "Sunday, " 
	}
	else if (s == 1)
	{
		s = "Monday, " 
	}
	else if (s == 2)
	{
		s = "Tuesday, " 
	}
	else if (s == 3)
	{
		s = "Wednesday, " 
	}
	else if (s == 4)
	{
		s = "Thursday, " 
	}
	else if (s == 5)
	{
		s = "Friday, " 
	}
	else if (s == 6)
	{
		s = "Saturday, " 
	}										
		
	m = d.getMonth() + 1
	switch (m)
	{
		case 1:
			s += "January "
			break
		case 2:
			s += "February "
			break
		case 3:
			s += "March "
			break
		case 4:
			s += "April "
			break
		case 5:
			s += "May "
			break
		case 6:
			s += "June "
			break
		case 7:
			s += "July "
			break
		case 8:
			s += "August "
			break
		case 9:
			s += "September "		
			break
		case 10:
			s += "October "
			break
		case 11:
			s += "November "
			break
		case 12:
			s += "December "																					
			break
	}
	s += d.getDate() + ", "
	s += d.getFullYear()
	document.write("<font face='Verdana' size=2 color='#ffffff'>" + s + "</font>")
};