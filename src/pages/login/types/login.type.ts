export type SubjectCasl =
  | "DashboardViewStatistic"
  | "DashboardExportSales"
  | "ReportSiteViewNC"
  | "ReportSiteExportNC"
  | "ReportSiteViewProduct"
  | "ReportSiteExportProduct"
  | "ReportSiteViewSponsor"
  | "ReportSiteExportSponsor"
  | "ReportSiteViewNCC"
  | "ReportSiteExportNCC"
  | "ReportSiteViewD40"
  | "ReportSiteExportD40"
  | "ReportSiteViewNCO"
  | "MemberViewMember"
  | "MemberEditMember"
  | "MemberExportMember"
  | "MemberViewCustomer"
  | "MemberEditCustomer"
  | "MemberExportCustomer"
  | "MemberViewHistory"
  | "MemberExportHistory"
  | "CheckinViewHistory"
  | "CheckinExportHistory"
  | "CheckinExportReport"
  | "NutritionClubViewNCO"
  | "NutritionClubEditNCO"
  | "NutritionClubExportNCO"
  | "NutritionClubCreateNCO"
  | "NutritionClubViewNCC"
  | "NutritionClubEditNCC"
  | "NutritionClubExportNCC"
  | "NutritionClubViewNDD"
  | "NutritionClubEditNDD"
  | "NutritionClubExportNDD"
  | "NutritionClubCreateNDD"
  | "NutritionClubViewRequest"
  | "NutritionClubActionRequest"
  | "NutritionClubViewSimulation"
  | "NutritionClubReportSimulation"
  | "NutritionClubCreateSimulation"
  | "ProductViewPackage"
  | "ProducExportPackage"
  | "ProductCreatePackage"
  | "ProductViewProduct"
  | "ProducEditProduct"
  | "ProductExportProduct"
  | "ProductCreateProduct"
  | "ContentViewArticle"
  | "ContentEditArticle"
  | "ContentExportArticle"
  | "ContentCreateArticle"
  | "ContentViewEvent"
  | "ContentEditEvent"
  | "ContentReportEvent"
  | "ContentCreateEvent"
  | "ContentViewChallenge"
  | "ContentExportChallenge"
  | "ContentEditChallenge"
  | "ContentCreateChallenge"
  | "ContentViewNoti"
  | "ContentExportNoti"
  | "ContentCreateNoti"
  | "ContentViewNews"
  | "ContentEditNews"
  | "ContentCreateNews"
  | "ContentViewSurvey"
  | "ContentExportSurvey"
  | "ContentCreateSurvey"
  | "ContentViewSticker"
  | "ContentCreateSticker"
  | "ContentEditSticker"
  | "ContentViewCate"
  | "ContentCreateCate"
  | "ContentCreateValueCate"
  | "ContentViewBanner"
  | "ContentCreateBanner"
  | "ContentEditBanner"
  | "OrderViewGift"
  | "OrderCreateGift"
  | "OrderViewGiftOrder"
  | "OrderEditGiftOrder"
  | "OrderExportGiftOrder"
  | "OrderImportGiftOrder"
  | "OrderViewOrder"
  | "OrderEditNotiOrder"
  | "OrderEditOrder"
  | "OrderExportOrder"
  | "OrderImportOrder"
  | "NewmeViewDashboard"
  | "NewmeViewMemberArticle"
  | "NewmeExportMemberArticle"
  | "NewmeActionMemberArticle"
  | "NewmeViewHBLArticle"
  | "NewmeCreateHBLArticle"
  | "NewmeExportHBLArticle"
  | "NewmeActionHBLArticle"
  | "NewmeViewTeam"
  | "NewmeExportTeam"
  | "NewmeViewTeamArticle"
  | "NewmeReportTeamArticle"
  | "NewmeExportTeamArticle"
  | "NewmeViewTeamImage"
  | "NewmeActionTeamImage"
  | "WLMViewDashboard"
  | "WLMViewProgram"
  | "WLMExportProgram"
  | "WLMViewTeam"
  | "WLMExportTeam"
  | "ImportViewList"
  | "ImportImportList"
  | "ImportDownTemplate"
  | "SystemViewUser"
  | "SystemEditUser"
  | "SystemCreateUser"
  | "SystemViewGroupUser"
  | "SystemEditGroupUser"
  | "SystemCreateGroupUser"
  | "SystemViewVersion"
  | "SystemActionVersion"
  | "SystemViewKeyAccount"
  | "SystemDetailKeyAccount"
  | "SystemEditKeyAccount"
  | "SystemCreateKeyAccount"
  | "SystemExportKeyAccount"
  | "SystemViewRegion"
  | "SystemDetailRegion"
  | "SystemExportRegion"
  | "SystemViewArea"
  | "SystemDetailArea"
  | "SystemEditArea"
  | "SystemCreateArea"
  | "SystemExportArea"
  | "SystemViewProvince"
  | "SystemDetailProvince"
  | "SystemEditProvince"
  | "SystemCreateProvince"
  | "SystemExportProvince"
  | "EventViewDashboard"
  | "EventExportDashboard"
  | "EventViewEvent"
  | "EventExportEvent"
  | "EventCreateEvent"
  | "ViewEventSurvey"
  | "EventExportSurvey"
  | "EventCreateSurvey"
  | "ConvertViewConvert"
  | "ConvertEditConvert"
  | "ConvertExportConvert"
  | "TicketStaffViewVendor"
  | "TicketStaffCreateVendor"
  | "TicketStaffActionVendor"
  | "TicketStaffExportVendor"
  | "TicketStaffViewAccount"
  | "TicketStaffDetailAccount"
  | "TicketStaffCreateAccount"
  | "TicketStaffEditAccount"
  | "TicketStaffExportAccount"
  | "AcademyViewStatistic"
  | "AcademyExport"
  | "AcademyViewCourse"
  | "AcademyExportCourse"
  | "AcademyCreateCourse"
  | "AcademyDetailCourse"
  | "AcademyEditCourse"
  | "AcademyExportParticipantCourse"
  | "AcademyViewParticipant"
  | "AcademyExportParticipant"
  | "AcademyDetailParticipant"
  | "AcademyViewQuiz"
  | "AcademyExportQuiz"
  | "AcademyCreateQuiz"
  | "AcademyDetailQuiz"
  | "AcademyEditQuiz"
  | "AcademyViewExamination"
  | "AcademyExportExamination"
  | "AcademyCreateExamination"
  | "AcademyDetailExamination"
  | "AcademyEditExamination"
  | "AcademyExportParticipantExamination"
  | "AcademyExportRegisterExamination"
  | "AcademyViewExam"
  | "AcademyExportExam"
  | "AcademyDetailExam"
  | "AcademyCreateExam"
  | "AcademyEditExam"
  | "AcademyViewSurvey"
  | "AcademyExportSurvey"
  | "AcademyCreateSurvey"
  | "SaleKitViewDocumentation"
  | "SaleKitDetailDocumentation"
  | "SaleKitCreateDocumentation"
  | "SaleKitEditDocumentation"
  | "SaleKitExportDocumentation"
  | "MessengerViewDashboard"
  | "MessengerViewOfficial"
  | "MessengerCreateOfficial"
  | "MessengerEditOfficial"
  | "MessengerViewNewsfeedOfficial"
  | "MessengerDetailNewsfeedOfficial"
  | "MessengerExportNewsfeedOfficial"
  | "MessengerEditNewsfeedOfficial"
  | "MessengerCreateNewsfeedOfficial"
  | "MessengerViewNewsfeedMember"
  | "MessengerDetailNewsfeedMember"
  | "MessengerExportNewsfeedMember"
  | "MessengerEditNewsfeedMember"
  | "MessengerViewNewsfeedReport"
  | "MessengerDetailNewsfeedReport"
  | "MessengerEditNewsfeedReport"
  | "MessengerExportNewsfeedReport"
  | "MessengerViewCommentReport"
  | "MessengerDetailCommentReport"
  | "MessengerEditCommentReport"
  | "MessengerExportCommentReport"
  | "MessengerViewOfficialMessage"
  | "MessengerDetailOfficialMessage"
  | "MessengerExportOfficialMessage"
  | "MessengerEditOfficialMessage"
  | "MessengerCreateOfficialMessage"
  | "MessengerViewOfficialMember"
  | "MessengerExportOfficialMember"
  | "MessengerImportOfficialMember"
  | "MessengerCreateOfficialMember"
  | "MessengerEditMemberOfficialGroup"
  | "MessengerImportOfficialEmployee"
  | "MessengerCreateOfficialEmployee"
  | "MessengerEditEmployeeOfficialGroup"
  | "MessengerViewGroupMember"
  | "MessengerEditGroupMember"
  | "MessengerDetailGroupMember"
  | "MessengerExportGroupChat"
  | "MessengerExportGroupMember"
  | "MessengerViewCustomWallpaper"
  | "MessengerEditCustomWallpaper"
  | "MessengerCreateCustomWallpaper"
  | "MessengerExportCustomWallpaper"
  | "MessengerViewSystemWallpaper"
  | "MessengerEditSystemWallpaper"
  | "MessengerCreateSystemWallpaper"
  | "MessengerExportSystemWallpaper"
  | "MessengerViewSensitiveWord"
  | "MessengerEditSensitiveWord"
  | "MessengerCreateSensitiveWord"
  | "MessengerExportSensitiveWord"
  | "MessengerViewNewsfeedScan"
  | "MessengerEditNewsfeedScan"
  | "MessengerExportNewsfeedScan"
  | "SendGuestView"
  | "SendGuestDetail"
  | "SendGuestEdit"
  | "SendGuestExport";

export type PermissionDetail = {
  nameKey: SubjectCasl;
  detailUrl: string;
};

export interface User {
  id: string;
  name: string;
  roles: string[];
}
