///<reference types="cypress"/>

import {
  startFromHomepage,
  navigateToMostRecentGig,
  buyTickets,
  navigateToTab,
  scrollToEmail,
  typeIntoEmailField,
} from "../page-objects/spiritStoreHomepage";

describe("SpiritStore actions", () => {
  beforeEach(() => {
    startFromHomepage();
  });

  it("Navigate to most recent announced gig", () => {
    navigateToMostRecentGig();
    // Un-comment lines when tickets for gig are available for purchase
    // buyTickets('3')
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
