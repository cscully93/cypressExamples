///<reference types="cypress"/>

import * as spiritStoreHomepage from "../page-objects/spiritStoreHomepage";
import * as spiritStoreGigPage from "../page-objects/spiritStoreGigPage";
import * as spiritStoreTabPage from "../page-objects/spiritStoreTabPage";

describe("SpiritStore actions", () => {
  beforeEach(() => {
    spiritStoreHomepage.startFromHomepage();
  });

  it("Navigate to most recent announced gig", () => {
    spiritStoreHomepage.navigateToMostRecentGig();
    // Un-comment lines when tickets for gig are available for purchase
    spiritStoreGigPage.verifyOnGig();
    spiritStoreGigPage.checkTicketsAvailable();
  });

  it('Navigate to "About" page and scroll down page', () => {
    spiritStoreHomepage.navigateToTab("About");
    spiritStoreTabPage.scrollToEmail();
  });

  it('Navigate to "Bar" page and input text into Newsletter email field', () => {
    spiritStoreHomepage.navigateToTab("Bar");
    spiritStoreTabPage.typeIntoEmailField();
  });
});
