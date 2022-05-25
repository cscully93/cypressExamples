///<reference types="cypress"/>

import {clickPayPalBtn,startFromHomepage,navigateToMostRecentGig,verifyPayPalSite,navigateToTab,scrollToEmail,typeIntoEmailField,selectTickets} from "../page-objects/spiritStoreHomepage";

describe("SpiritStore actions", () => {

  beforeEach(() => {
    startFromHomepage();
  });
  it("Navigate to most recent announced gig", () => {
    navigateToMostRecentGig();
    // Un-comment lines when tickets for gig are available for purchase
    selectTickets("3");
    clickPayPalBtn();
    clickPayPalBtn();
    verifyPayPalSite();
  });
  it('Navigate to "About" page and scroll down page', () => {
    navigateToTab("About");
    scrollToEmail();
  });
  it('Navigate to "Bar" page and input text into Newsletter email field', () => {
    navigateToTab("Bar");
    typeIntoEmailField();
  });

});
