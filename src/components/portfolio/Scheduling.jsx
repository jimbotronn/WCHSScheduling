import React, { useState } from "react";
import Modal from "react-modal";
import Reveal from "react-reveal/Reveal";
import Iframe from "react-iframe"
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import { InlineWidget } from "react-calendly";


const Scheduling = () => {
    return (
      <div className="shane_tm_section shane_tm_section_mod" id="portfolio">
      <SimpleReactLightbox>
          <div className="shane_tm_portfolio shane_tm_portfolio_mod">
            <div className="container">
              <div className="positon-relative">
                {/* End shane_tm_title */}
                <div className="portfolio_filter">
                  
                     <div className="portfolio_list portfolio_list_mod">

                      <div id='layout' class="layout--collage">
                                 
                      <Reveal effect="fadeInLeft">
                      <InlineWidget url="https://calendly.com/wchswarhawks" styles={{  height: '650px'}}/>
                      </Reveal>
    
                         
                            {/* End single image block */}
                  
                          {/* End portfolio list */}
                          </div>

                      {/* End tabpanel */}
                    </div>
                    {/* End list wrapper */}
                
                </div>
              </div>
            </div>
          </div>
        </SimpleReactLightbox>   
      </div>
    );
  };
  
  export default Scheduling;
  