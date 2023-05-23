import React from 'react'
import Header from './Header';
import Header2 from './Header2';

const News = () => {
    return (
      <div>
       <Header2 />
        <div style={{margin:20}}>
        <nav className="navbar navbar-light bg-white">
          <a style={{marginLeft:550,fontSize:25,color:"black",fontWeight:'bold'}} >Legalbook</a>
          <div className="btn-group">
             <button style={{backgroundColor:"black"}} type="submit" className="btn btn-primary">Follow Us <i className="fa fa-angle-right" /></button>
          </div>
        </nav>
        <div className="container-fluid gedf-wrapper">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-body">
                  <div className="h5">@Legalbook</div>
                  <div className="h7 text-muted">Legal Clinic Pakistan</div>
                  <div className="h7">Welcom to Legalbook. We can give our users a platform to share their Legal
                  reviews or posts anonymously.Share your practical knowledge and rich experiences to provide 
                  comprehensive legal news to our users.
                  </div>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="h6 text-muted">Followers</div>
                    <div className="h5">5234</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Posts</div>
                    <div className="h5">6758</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Likes</div>
                    <div className="h5">1234</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Registered Lawyers</div>
                    <div className="h5">1234</div>
                  </li>
                  <li className="list-group-item">
                    <div className="h6 text-muted">Registered Students</div>
                    <div className="h5">4321</div>
                  </li> 
                </ul>
              </div>
            </div>
            <div className="col-md-6 gedf-main">
              {/*- \\\\\\\Post*/}
              <div className="card gedf-card">
                <div className="card-header">
                  <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="posts-tab" data-toggle="tab" href="#posts" role="tab" aria-controls="posts" aria-selected="true">Make
                        a publication</a>
                    </li>
                    <li>
                        <form style={{marginLeft:20}} className="form-inline">
                            <div className="input-group">
                            <input type="password" className="form-control" aria-label="Recipient's username" placeholder="Enter Post Password" aria-describedby="button-addon2" />
                            <div className="input-group-append">
                            <button style={{backgroundColor:"black"}} className="btn btn-outline-primary" type="button" id="button-addon2">
                                <i style={{color:"white"}} className="fa fa-search" />
                            </button>
                            </div>
                            </div>
                        </form>
                    </li>
                  </ul>
                </div>
                <div className="card-body">
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="posts" role="tabpanel" aria-labelledby="posts-tab">
                      <div className="form-group">
                        <label className="sr-only" htmlFor="message">post</label>
                        <textarea  type="textarea" name="Post Heading" rows={2} defaultValue={""} placeholder='Post Heading' />
                        <textarea type="textarea" name="Post Data" rows={6} defaultValue={""} placeholder='Post Data' />
                      </div>
                    </div>
                   
                  </div>
                  <div className="btn-toolbar justify-content-between">
                    <div className="btn-group">
                      <button style={{backgroundColor:"black"}} type="submit" className="btn btn-primary">share</button>
                    </div>
                    <div className="btn-group">
                      <button id="btnGroupDrop1" type="button" className="btn btn-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i style={{color:'black'}} className="fa fa-globe" />
                      </button>

                    </div>
                  </div>
                </div>
              </div>
              {/* Post /////*/}
              {/*- \\\\\\\Post*/}
              <div className="card gedf-card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mr-2">
                        <img className="rounded-circle" width={45} src="img/news2.png" alt="" />
                      </div>
                      <div className="ml-2">
                        <div className="h5 m-0">@Anonymous</div>
                        
                      </div>
                    </div>
                    <div>
                      <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                          <div className="h6 dropdown-header">Configuration</div>
                          <a className="dropdown-item" href="#">Update</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o" /> Jan 21, 2021</div>
                  <a className="card-link" href="#">
                    <h5 className="card-title">Ghislaine Maxwell faces high legal bar in bid to overturn sex abuse conviction, experts say</h5>
                  </a>
                  <p className="card-text">
                  Maxwell is going to appeal her conviction for setting up teenage girls to have sexual encounters with financier Jeffrey Epstein, but experts said she will struggle to clear the high legal bar needed to overturn the verdict.
                  <a href="https://www.reuters.com/world/us/ghislaine-maxwell-faces-high-legal-bar-bid-overturn-sex-abuse-conviction-experts-2021-12-30/">     <u>Link</u></a>
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="card-link"><i className="fa fa-gittip" /> Like</a>
                  <a href="#" className="card-link"><i className="fa fa-comment" /> Comment</a>
                  <a href="#" className="card-link"><i className="fa fa-mail-forward" /> Share</a>
                </div>
              </div>
              {/* Post /////*/}
              {/*- \\\\\\\Post*/}
              <div className="card gedf-card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mr-2">
                        <img className="rounded-circle" width={45} src="img/news2.png" alt="" />
                      </div>
                      <div className="ml-2">
                        <div className="h5 m-0">@Anonymous</div>
                        
                      </div>
                    </div>
                    <div>
                      <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                          <div className="h6 dropdown-header">Configuration</div>
                          <a className="dropdown-item" href="#">Update</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o" />  June 12, 2021</div>
                  <a className="card-link" href="#">
                    <h5 className="card-title"> Federal appeals courts restrict public operations amid COVID surge</h5>
                  </a>
                  <p className="card-text">
                  Federal appeals courts in New York, New Orleans and Chicago have announced new 
                  plans to curb public operations in January as COVID-19 infections surge across 
                  the country, marking the latest moves in the federal judiciary to minimize exposure threats.
                 The New York-based 2nd U.S. Circuit Court of Appeals said on Wednesday that oral 
                 arguments will be held remotely beginning on Jan. 4 "in light of the recent surge
                  in Covid-19 infections." The court said it would resume in-person arguments "as 
                  soon as circumstances permit."
                  <a href="https://www.reuters.com/legal/government/federal-appeals-courts-restrict-public-operations-amid-covid-surge-2021-12-29/" target="_blank">     <u>Link</u></a>
                  </p>
                  
                </div>
                <div className="card-footer">
                  <a href="#" className="card-link"><i className="fa fa-gittip" /> Like</a>
                  <a href="#" className="card-link"><i className="fa fa-comment" /> Comment</a>
                  <a href="#" className="card-link"><i className="fa fa-mail-forward" /> Share</a>
                </div>
              </div>
              {/* Post /////*/}
              {/*- \\\\\\\Post*/}
              <div className="card gedf-card">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="mr-2">
                        <img className="rounded-circle" width={45} src="img/news2.png" alt="" />
                      </div>
                      <div className="ml-2">
                        <div className="h5 m-0">@Anonymous</div>
                      
                      </div>
                    </div>
                    <div>
                      <div className="dropdown">
                        <button className="btn btn-link dropdown-toggle" type="button" id="gedf-drop1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i className="fa fa-ellipsis-h" />
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="gedf-drop1">
                          <div className="h6 dropdown-header">Configuration</div>
                          <a className="dropdown-item" href="#">Update</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o" />  Sep 18, 2021</div>
                  <a className="card-link" href="#">
                    <h5 className="card-title">Pakistani Law and Online Marketplaces - An Enigma.</h5>
                  </a>
                  <p className="card-text">
                  The dramatic alteration to the in-person product experience resulting 
                  from the global lockdown has accelerated the growth of online marketplaces. 
                  The requirement of new security procedures for retailers and health protocols 
                  for consumers continues to move shoppers towards online purchases.  There are
                   now millions of mobile apps, websites and platforms which grant consumers 
                   access to a plethora of products and services. This is evidenced through
                    the 2021 Online Marketplaces Report illustrating that 62.5% of all global
                     online spending occurred via digital marketplaces in the year 2020 which
                      was an overall 29% increase in gross merchandise sales.
                    <a href="https://courtingthelaw.com/2021/11/03/commentary/pakistani-law-and-online-marketplaces-an-enigma/" target="_blank">        <u>Link</u></a>
                  </p>
                </div>
                <div className="card-footer">
                  <a href="#" className="card-link"><i className="fa fa-gittip" /> Like</a>
                  <a href="#" className="card-link"><i className="fa fa-comment" /> Comment</a>
                  <a href="#" className="card-link"><i className="fa fa-mail-forward" /> Share</a>
                </div>
              </div>
              {/* Post /////*/}
            </div>
            <div className="col-md-3">
              <div className="card gedf-card">
                <div className="card-body">
                  <h5 className="card-title">Share Your Experience</h5>
                  <img  src="img/news1.jpg" />
                </div>
              </div>
              <div className="card gedf-card">
                <div className="card-body">
                  <h5 className="card-title">Share Latest News</h5>
                  <img  src="img/news3.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
}

export default News;
