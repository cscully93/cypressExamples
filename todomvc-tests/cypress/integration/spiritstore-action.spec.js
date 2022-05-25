///<reference types="cypress"/>

import * as spiritStoreHomepage from "../page-objects/spiritStoreHomepage";

describe("SpiritStore actions", () => {

  beforeEach(() => {
    spiritStoreHomepage.startFromHomepage();
  });

  it("Navigate to most recent announced gig", () => {
    spiritStoreHomepage.navigateToMostRecentGig();
    // Un-comment lines when tickets for gig are available for purchase
    spiritStoreHomepage.selectTickets("3");
    spiritStoreHomepage.clickPayPalBtn();
    spiritStoreHomepage.clickPayPalBtn();
    spiritStoreHomepage.verifyPayPalSite();
  });

  it('Navigate to "About" page and scroll down page', () => {
    spiritStoreHomepage.navigateToTab("About");
    spiritStoreHomepage.scrollToEmail();
  });
  
  it('Navigate to "Bar" page and input text into Newsletter email field', () => {
    spiritStoreHomepage.navigateToTab("Bar");
    spiritStoreHomepage.typeIntoEmailField();
  });

});
