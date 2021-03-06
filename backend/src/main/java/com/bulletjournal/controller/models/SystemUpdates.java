package com.bulletjournal.controller.models;

import javax.validation.constraints.NotBlank;

public class SystemUpdates {

    @NotBlank
    private String ownedProjectsEtag;

    @NotBlank
    private String sharedProjectsEtag;

    @NotBlank
    private String groupsEtag;

    @NotBlank
    private String notificationsEtag;

    // TODO: reminders

    public String getOwnedProjectsEtag() {
        return ownedProjectsEtag;
    }

    public void setOwnedProjectsEtag(String ownedProjectsEtag) {
        this.ownedProjectsEtag = ownedProjectsEtag;
    }

    public String getSharedProjectsEtag() {
        return sharedProjectsEtag;
    }

    public void setSharedProjectsEtag(String sharedProjectsEtag) {
        this.sharedProjectsEtag = sharedProjectsEtag;
    }

    public String getGroupsEtag() {
        return groupsEtag;
    }

    public void setGroupsEtag(String groupsEtag) {
        this.groupsEtag = groupsEtag;
    }

    public String getNotificationsEtag() {
        return notificationsEtag;
    }

    public void setNotificationsEtag(String notificationsEtag) {
        this.notificationsEtag = notificationsEtag;
    }
}
